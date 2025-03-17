const mongoose = require("mongoose");

mongoose.connect(
    "mongodb://127.0.0.1:27017/db-untar-cafe",
)

const db = mongoose.connection;

db.once("open", () => {
    console.log("Successfully connected to MongoDB using Mongoose!");
});

const Member = require("./models/member")

async function readData() {
    try {

        const findOneQuery = await Member.findOne({ name: "Starship Enterprise" });
        console.log("Hasil findOne name: Starship Enterprise", findOneQuery ? JSON.stringify(findOneQuery) : "No result found");

        const findQuery = await Member.find({ name: "Starship Enterprise" });
        console.log("Hasil find name: Starship Enterprise:", findQuery.length ? JSON.stringify(findQuery) : "No results found");

        const whereQuery = await Member.where('credit').gt(0);
        console.log("Hasil where Credit > 0:", whereQuery.length ? JSON.stringify(whereQuery) : "No matching members");

    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

// Function to read data
readData();