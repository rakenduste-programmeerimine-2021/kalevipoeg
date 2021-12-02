const { Schema, model } = require('mongoose')

const newUserSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    userName: { type: String, required: true},
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    userCreated: { type: Date, default: Date.now }
})

const user = model("User", newUserSchema)
module.exports = user