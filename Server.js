//Connection of Node.js & MongoDB.This file is export from Here & Import in API files where Connection is Required for CRUD Operations.

const { MongoClient } = require("mongodb");
const url = "mongodb://127.0.0.1:27017";
const database = "Interview";
const client = new MongoClient(url);

async function dbconnect() {
  let result = await client.connect();
  let db = result.db(database);
  return db.collection("Products & Category");
}

module.exports = dbconnect;
