const mongoose = require("mongoose");
const Member = require("./0202_Schema");

mongoose.connect("mongodb://127.0.0.1:27017/db-untar-cafe", {
    useNewUrlParser: true,
    useUnifiedTopology: true // Menambahkan opsi ini untuk menghindari peringatan
});

const db = mongoose.connection;

db.once("open", () => {
    console.log("Successfully connected to MongoDB using Mongoose!");
});

const deleteMember = async () => {
    try {
        // Menghapus anggota
        await Member.deleteOne({ name: "Starship Enterprise" });

        // Mencari anggota yang dihapus
        const data = await Member.findOne({ name: "Starship Enterprise" });
        if (data) {
            console.log("Find One: " + JSON.stringify(data));
        } else {
            console.log("Member not found."); // Menampilkan pesan jika anggota tidak ditemukan
        }
    } catch (err) {
        console.log(err); // Menampilkan kesalahan jika ada
    }
};

deleteMember(); // Memanggil fungsi untuk menghapus member