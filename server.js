const MongoClient = require("mongodb").MongoClient;
const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const app = express();

app.use(express.json());

// Connection URL
const url = process.env.MONGO_URL;

// Database Name
const dbName = "elon";

// Create a new MongoClient
const client = new MongoClient(url);

// Use connect method to connect to the Server
async function initDb() {
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const memeCollection = db.collection("memes");

  const cursor = memeCollection.find({}, { fields: { tags: false } });

  const memes = await cursor.toArray();

  console.log(memes);
}

initDb();
