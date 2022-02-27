const mongoose = require("mongoose")

const UserSchema = mongoose.Schema({
    name: String,
    email: String,
    pets: [{type : mongoose.Types.ObjectId, ref: "Pet"}]
})


const User = mongoose.model("User", UserSchema)

module.exports = User