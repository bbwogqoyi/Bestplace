import express from 'express';
import cors from 'cors'

const app = express()
const port = 5001

app.use(cors());
//app.options('*', cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('uploads'))

function two(req, res, next) {
  req.foo = '...needs better demo 😔';
  next();
}
 
import properties from './routes/properties.js'
app.use(properties)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})