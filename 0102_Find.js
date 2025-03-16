const { MongoClient } = require("mongodb");

const dbURL = "mongodb://127.0.0.1:27017";
const dbName = "db-untar-cafe";

async function findData() {
    try {
        const client = await MongoClient.connect(dbURL);
        const db = client.db(dbName);

        // Fetch data from the "untar-cafe" collection
        const data = await db.collection("untar-cafe").find().toArray();
        console.log(data); // Show data

        await client.close(); // Close connection after operation
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

// Call function to find data
findData();
