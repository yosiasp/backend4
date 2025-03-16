const mongoose = require("mongoose");
const Member = require("./0202_Schema")

mongoose.connect(
    "mongodb://127.0.0.1:27017/db-untar-cafe",
)
const db = mongoose.connection;

db.once("open", () => {
    console.log("Succesfully connected to MongoDb using Mongoose!")
});

// MEMBUAT DATA BARU BERDASARKAN SCHEMA:

