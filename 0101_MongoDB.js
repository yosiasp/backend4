const { MongoClient } = require('mongodb');

const url = "mongodb://127.0.0.1:27017/db-untar-cafe"; // Corrected URL
const client = new MongoClient(url);

async function connectMongoDB() {
    try {
        await client.connect();
        console.log("Connected to MongoDB!");
    } catch (err) {
        console.error("Connection failed:", err);
    } finally {
        await client.close();
    }
}

// Call function to connect to MongoDB
connectMongoDB();
