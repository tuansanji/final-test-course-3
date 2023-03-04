const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    username: { type: String, unique: true, required: true },
    password: {
      type: String,
      required: true,
    },
  },
  {
    collection: "users",
    timestamps: true,
  }
);
module.exports = mongoose.model("users", userSchema);
