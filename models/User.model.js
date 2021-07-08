const { Schema, model } = require("mongoose");


const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: { 
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
  address: {
    type: String,
  },
  role: String, //Admin, Reader, Guest, Superuser , etc
  imageUrl: String,
});

const User = model("User", userSchema);
module.exports = User;