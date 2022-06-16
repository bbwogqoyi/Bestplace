import { ReasonPhrases, StatusCodes } from 'http-status-codes';
import { DiskManager, Transmit } from "@quicksend/transmit";
import path from 'path';
import crypto from 'crypto';
import bcrypt from 'bcrypt';
import express from 'express';

// own modules 
import db from '../config/arango.js'


// const properties = db.collection('properties');
const properties = express.Router()

// middleware that is specific to this router
properties.use((req, res, next) => {
  console.log('Requested URI Path : ', req.url)
  req._uuid = crypto.randomUUID();
  next()
})

/**
 * Get a specific property
 */
properties.get('/properties/:id', function (req, res) {
  if(!req.params.id) 
    res.status(StatusCodes.BAD_REQUEST).send(ReasonPhrases.BAD_REQUEST)
  else{
    const query = `FOR p IN Properties FILTER p._key == "${req.params.id}" RETURN p`

    db.query(query).then(
      cursor => cursor.all()
    ).then(
      result => {
        console.log(`${result[0]._id} documnet retrieved`)
        res.status(StatusCodes.OK).json(result[0])
      },
      err => {
        console.error('Failed to execute query:', err)
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(ReasonPhrases.INTERNAL_SERVER_ERROR)
      }
    );
  }
  
})

/**
 * Get all the saved properties
 * e.g. http://localhost:3000/properties/?page=1&count=10
 */
properties.get('/properties', function (req, res) {
  const page = req.query.page || 0
  const count = req.query.count || 10

  const query = `
  FOR p IN Properties
    LET enquiryCount = LENGTH(
      FOR e IN Enquiries
        FILTER e.propertyId == p._key
        RETURN e
    )
  LIMIT ${page}, ${count} 
  SORT p.listingDate DESC 
  RETURN merge(p, {numOfEnquiries: enquiryCount})
  `

  db.query(query).then(
    cursor => cursor.all()
  ).then(
    docs => {
      console.log(`${docs.length} documnets retrieved`)
      res.status(StatusCodes.OK).json(docs)
    },
    err => {
      console.error('Failed to execute query:', err)
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(ReasonPhrases.INTERNAL_SERVER_ERROR)
    }
  );
})


// Implement transmit as an express middleware
const upload = (options) => (req, _res, next) => {
  let manager = options(req);
  return new Transmit({ manager })
    .parseAsync(req)
    .then((results) => {
      req.fields = results.fields;
      req.files = results.files;
      req.setHeader('Access-Control-Allow-Origin', '*');
      _res.setHeader('Access-Control-Allow-Origin', '*');
      next();
    })
    .catch((error) => next(error));
};

const manager = (req) => {
  new DiskManager({
    directory: path.join('uploads', req._uuid)
  });
}

properties.post("/upload", upload(manager), (req, res) => {
  console.log(`Upload Complete\n${req.files}`);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.status(StatusCodes.ACCEPTED).send({
    fields: req.fields,
    files: req.files
  });
});

// properties.post('/upload', upload.array('files'), function (req, res) {
//   if(req.files) {
//     console.log(req.files);
//     res.status(StatusCodes.ACCEPTED).json({ message: "Successfully uploaded files" });
//   } else {
//     res.status(StatusCodes.BAD_REQUEST)
//   }
// })

/**
 * Add new property record into DB
 */
properties.post('/properties', function (req, res) {
  let property = req.body;
  property['status'] = 0; // new properties have the DRAFT status
  property['listingDate'] = (new Date()).toISOString();

  console.log(`Propert Info:\n${JSON.stringify(property)}`)
  
  const query = `INSERT ${JSON.stringify(property)} IN Properties RETURN NEW`;
  console.log(query);
  db.query(query).then(
    cursor => cursor.all()
  ).then(
    docs => {
      console.log(`${docs.length} document(s) saved`)
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.status(StatusCodes.CREATED).json({ ...docs[0] })
    },
    err => {
      console.error('Failed to execute query:', err.body)
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(ReasonPhrases.INTERNAL_SERVER_ERROR)
    }
  );
})

properties.get('/accounts', function (req, res) {
  const page = req.query.page || 0
  const count = req.query.count || 10

  const query = `FOR u IN Accounts LIMIT ${page}, ${count} SORT u.email DESC RETURN u`

  db.query(query).then(
    cursor => cursor.all()
  ).then(
    docs => {
      console.log(`${docs.length} documnets retrieved`)
      res.status(StatusCodes.OK).json(docs)
    },
    err => {
      console.error('Failed to execute query:', err)
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(ReasonPhrases.INTERNAL_SERVER_ERROR)
    }
  );
})

properties.post('/accounts', function (req, res) {
  let newAccount = req.body;

  bcrypt.hash(newAccount.password, 10, (err, hash) => {
    if(!err) {
      newAccount.password = hash;
      newAccount['createDate'] = (new Date()).toISOString();
      const query = `INSERT ${JSON.stringify(newAccount)} IN Accounts RETURN NEW`;
      console.log(`New account:\n${query}`)

      db.query(query).then(
        cursor => cursor.all()
      ).then(
        docs => {
          console.log(`${docs.length} document(s) saved`)
          res.status(StatusCodes.CREATED).json({ ...docs[0] })
        },
        err => {
          console.error('Failed to execute query:', JSON.stringify(err.body))
          res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(ReasonPhrases.INTERNAL_SERVER_ERROR)
        }
      );
    }
  });
})

properties.post('/accounts/signin', function (req, res) {
  let claim = req.body;

  const query = `FOR acc IN Accounts FILTER acc.email == "${claim.email}"  RETURN acc`;
  console.log(`Account Query :\n${query}`)

  db.query(query).then(
    cursor => cursor.all()
  ).then(
    docs => {
      let account = docs[0];
      if(docs.length>0) {
        bcrypt.compare(claim.password, account.password, (err, isSame) => {
          if(!err && isSame) {
            let result = { 
              'id': account._key,
              'email': account.email,
              'phone': account.phone,
              'firstname': account.firstname,
              'lastname': account.lastname
            }
            res.status(StatusCodes.OK).json(result)
          }
          else {
            res.status(StatusCodes.UNAUTHORIZED).send(ReasonPhrases.UNAUTHORIZED)
          }
        })
      } else {
        res.status(StatusCodes.UNAUTHORIZED).send(ReasonPhrases.UNAUTHORIZED)
      }
    },
    err => {
      console.error('Failed to execute query:', JSON.stringify(err.body))
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(ReasonPhrases.INTERNAL_SERVER_ERROR)
    }
  );
})

properties.get('/enquiries', function (req, res) {
  const page = req.query.page || 0
  const count = req.query.count || 10

  const query = `
  FOR e IN Enquiries 
    LET p = (
      FOR p IN Properties
        FILTER p._key == e.propertyId
        RETURN p
    )
    LET u = (
      FOR u IN Accounts
        FILTER u._key == e.userId
        RETURN u
      )
    LIMIT ${page}, ${count} 
    SORT e.enquiryDate DESC 
    RETURN merge(e, {user: u[0], property: p[0] })
  `

  db.query(query).then(
    cursor => cursor.all()
  ).then(
    docs => {
      console.log(`${docs.length} documnets retrieved`)
      res.status(StatusCodes.OK).json(docs)
    },
    err => {
      console.error('Failed to execute query:', err)
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(ReasonPhrases.INTERNAL_SERVER_ERROR)
    }
  );
})

properties.post('/enquiries', function (req, res) {
  let newEnquiry = req.body;
  newEnquiry['enquiryDate'] = (new Date()).toISOString();

  const query = `INSERT ${JSON.stringify(newEnquiry)} IN Enquiries RETURN NEW`;

  db.query(query).then(
    cursor => cursor.all()
  ).then(
    docs => {
      console.log(`${docs.length} document(s) saved`)
      res.status(StatusCodes.CREATED).json({ ...docs[0] })
    },
    err => {
      console.error('Failed to execute query:', JSON.stringify(err.body))
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(ReasonPhrases.INTERNAL_SERVER_ERROR)
    }
  );
})





 
export default properties