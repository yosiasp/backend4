const mongoose = require("mongoose");

mongoose.connect(
    "mongodb://127.0.0.1:27017/db-untar-cafe",
)

const db = mongoose.connection;

db.once("open", () => {
    console.log("Successfully connected to MongoDB using Mongoose!");
});

const Member = require("./models/member")

async function updateMember () {
    try {
        // Melakukan pembaruan
        await Member.updateOne({ name: "Starship Enterprise" }, { credit: 1031000 });

        // Mencari anggota yang diperbarui
        const data = await Member.findOne({ name: "Starship Enterprise" });
        if (data) {
            console.log("Find One: " + JSON.stringify(data));
        }
    } catch (err) {
        console.log(err); // Menampilkan kesalahan jika ada
    }
};

updateMember(); // Memanggil fungsi untuk memperbarui member