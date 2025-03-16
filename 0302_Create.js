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

const insertMember = async () => {
    var member_to_insert = new memberSchema({
        name: "Yosia Sipahutar",
        email: "yosiasipahutar@gmail.com",
        credit: 1000000
    });

    try {
        const product = await member_to_insert.save(); // Menggunakan await
        console.log(JSON.stringify(product));
    } catch (err) {
        console.log(err); // Menampilkan kesalahan jika ada
    }
};

insertMember(); // Memanggil fungsi untuk menyimpan member