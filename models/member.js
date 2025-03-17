const mongoose = require("mongoose");

const memberSchema = mongoose.Schema({
    name: String,
    email: String,
    credit: Number,
})

const Member = mongoose.model("Member", memberSchema);

module.exports = Member; 

