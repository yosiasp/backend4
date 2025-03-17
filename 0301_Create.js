const mongoose = require("mongoose");
const Member = require("./models/member")

mongoose.connect(
    "mongodb://127.0.0.1:27017/db-untar-cafe",
)

const db = mongoose.connection;

db.once("open", () => {
    console.log("Successfully connected to MongoDB using Mongoose!");
});

async function createMember() {
    try {
        var member_to_insert = new Member({
            name: "Space The Final Frontier",
            email: "these-are@the-voyages.com",
            credit: 1701000  
        });

        const product = await member_to_insert.save(); // Menggunakan await
        console.log("Creating new member succesfull:")
        console.log(JSON.stringify(product));
    } catch (error) {
        console.log(error); // Menampilkan kesalahan jika ada
    }
}

// Call function to create new member
createMember();