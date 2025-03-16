const mongoose = require("mongoose");
const memberSchema = require("./0202_Schema");

mongoose.connect("mongodb://127.0.0.1:27017/db-untar-cafe", {
    useNewUrlParser: true,
    useUnifiedTopology: true // Menambahkan opsi ini untuk menghindari peringatan
});

const db = mongoose.connection;

db.once("open", () => {
    console.log("Successfully connected to MongoDB using Mongoose!");
});


const updateMember = async () => {
    try {
        // Melakukan pembaruan
        await memberSchema.updateOne({ name: "Starship Enterprise" }, { credit: 1031000 });

        // Mencari anggota yang diperbarui
        const data = await memberSchema.findOne({ name: "Starship Enterprise" });
        if (data) {
            console.log("Find One: " + JSON.stringify(data));
        }
    } catch (err) {
        console.log(err); // Menampilkan kesalahan jika ada
    }
};

updateMember(); // Memanggil fungsi untuk memperbarui member