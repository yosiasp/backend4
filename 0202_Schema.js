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

// MEMBUAT DATA BARU BERDASARKAN SCHEMA:

// Function to insert data
async function insertMembers() {
    try {
        // METODE 1: Menggunakan callback`.save()`
        const member1 = new Member({
            name: "Space The Final Frontier",
            email: "these-are@the-voyages.com",
            credit: 50000  
        });
        const savedMember1 = await member1.save();
        console.log("Member 1 created:", savedMember1);

        // METODE 2: Menggunakan callback `.create()`
        const savedMember2 = await Member.create({
            name: "Starship Enterprise",
            email: "to-boldly-go@no1hasgonebefore.com",
            credit: 1201000
        });
        console.log("Member 2 created:", savedMember2);

    } catch (error) {
        console.error("Error saving member:", error);
    }
}

// Call function to insert data
insertMembers();