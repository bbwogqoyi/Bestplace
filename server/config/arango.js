import { Database } from 'arangojs';

const db = new Database({
  url: "http://grahslagg.com:8529/",
  databaseName: "bestplace",
  auth: { username: "bestplace", password: "bestplace" },
});

export default db;