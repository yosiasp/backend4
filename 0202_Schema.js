const mongoose = require("mongoose");

mongoose.connect(
    "mongodb://127.0.0.1:27017/db-untar-cafe",
)
const db = mongoose.connection;

db.once("open", () => {
    console.log("Succesfully connected to MongoDb using Mongoose!")
});

const memberSchema = mongoose.Schema({
    name: String,
    email: String,
    credit: Number,
})

const Member = mongoose.model("Member", memberSchema);

module.exports = Member;