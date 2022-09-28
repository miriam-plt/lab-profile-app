const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    email: { 
      type: String, 
      unique: true, 
      required: true 
    },
    username: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    campus: {
      type: String,
      enum: ["Madrid", "Barcelona", "Miami", "Paris", "Berlin", "Amsterdam", "México", "Sao Paulo", "Lisbon", "Remote"]
    },
    course: {
      type: String,
      enum: ["Web Dev", "UX/UI", "Data Analytics","Cyber Security"]
    },
    image: {
      type: String
    } 
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
