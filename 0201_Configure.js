const mongoose = require("mongoose");

mongoose.connect(
    "mongodb://127.0.0.1:27017/db-untar-cafe",
    { useNewUrlParser: true } // to use new URL string parser (harusnya gak diperluin di mongoose versi baru)
)
const db = mongoose.connection;

db.once("open", () => {
    console.log("Succesfully connected to MongoDb using Mongoose!")
});