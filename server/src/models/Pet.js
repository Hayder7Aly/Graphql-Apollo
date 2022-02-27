const mongoose = require("mongoose")


const PetSchema = mongoose.Schema({
    name: String,
    type: String,
    height: Number,
    owner: {type: mongoose.Types.ObjectId, ref: "User"}
})

const Pet = mongoose.model("Pet", PetSchema)

module.exports = Pet