const mongoose = require("mongoose");

mongoose.connect(
    "mongodb://127.0.0.1:27017/db-untar-cafe",
)
const db = mongoose.connection;

db.once("open", () => {
    console.log("Succesfully connected to MongoDb using Mongoose!")
});

const Member = require("./0202_Schema")

async function findMember() {
    try {
        const myQuery = await Member.findOne({ name: "Yosia Sipahutar" })
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