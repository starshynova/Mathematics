import express from "express";
import { MongoClient, ServerApiVersion } from "mongodb";
import cors from "cors";

const app = express();
const PORT = 5000;

app.use(cors());

const uri = "mongodb+srv://starshynova:starshynova@cluster0.gom3j.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri, {
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

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
