const { MongoClient } = require("mongodb");

const dbURL = "mongodb://127.0.0.1:27017";
const dbName = "db-untar-cafe";

async function insertData() {
    try {
        const client = await MongoClient.connect(dbURL);
        const db = client.db(dbName);

        // Insert data to the "untar-cafe" collection
        const newData= await db.collection("untar-cafe")
            .insertOne({
                menu: "Earl Grey",
                description: "Tea. Earl Grey. Hot",
                price: 18000,
                isavailable: true
            }, (error, db) => {
                if (error) throw error;
                console.log(db)
            })

            console.log("Data inserted succesfully: ", newData)

        await client.close(); // Close connection after operation
    } catch (error) {
        console.error("Error inserting data:", error);
    }
}

// Call funtion to insert data
insertData();