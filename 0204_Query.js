const mongoose = require("mongoose");

mongoose.connect(
    "mongodb://127.0.0.1:27017/db-untar-cafe",
)
const db = mongoose.connection;

db.once("open", () => {
    console.log("Succesfully connected to MongoDb using Mongoose!")
});

const Member = require("./models/member")

async function findMember() {
    try {
        // Mencari member dengan nama "Starship Enterprise" serta memiliki email yang mengandung "boldly"
        const myQuery = await Member.findOne({ name: "Starship Enterprise" })
            .where("email").regex(/boldly/); 
        
        if (myQuery) {
            console.log("Founded member:", myQuery.name);
        } else {
            console.log("No member found.");
        }

    } catch (error) {
        console.error("Error finding member:", error);
    }
}

// Call function to find member
findMember();