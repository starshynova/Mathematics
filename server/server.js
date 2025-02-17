import express from "express";
import { MongoClient, ServerApiVersion } from "mongodb";
import cors from "cors";
import dotenv from "dotenv";
import { generateExample } from "./generateExample.js";

const app = express();
const PORT = 5000;

app.use(cors());

dotenv.config();
const client = new MongoClient(process.env.MONGODB_URL, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});


app.get("/api/math-operation", async (req, res) => {
  try {
    await client.connect();
    const db = client.db("React-project");
    const collection = db.collection("math-function");

    const data = await collection.find({ operation: { $exists: true }}, { projection: { operation: 1, _id: 1 } }).toArray();

    res.json(data);
  } catch (error) {
    console.error("Error querying data:", error);
    res.status(500).json({ error: "Database error" });
  } finally {
    await client.close();
  }
})

app.get("/api/questions", async (req, res) => {
  try {
    await client.connect();
    const db = client.db("React-project");
    const collection = db.collection("math-function");

    const data = await collection.find({ operation: { $exists: true } }).toArray();
    res.json(data);
  } catch (error) {
    console.error("Error querying data:", error);
    res.status(500).json({ error: "Database error" });
  } finally {
    await client.close();
  }
});

app.get("/generate/:operation", async (req, res) => {
  const { operation } = req.params;
  try {
      const exampleData = await generateExample(operation);
      res.json(exampleData);
  } catch (error) {
      res.status(400).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
