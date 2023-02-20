const mongoose = require("mongoose");

const registerationSchema = mongoose.Schema({
    name: String,
    email: String,
    gender: String,
    password: String,
    age: Number,
    city: String
})


const RegistrationModel = mongoose.model("user", registerationSchema);


module.exports = RegistrationModel;