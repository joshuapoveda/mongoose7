const mongoose = require("mongoose");

const fruit7Schema = new mongoose.Schema({
  name: { type: String, required: true },
  color: { type: String, required: true },
  readyToEat: Boolean,
});

const Fruits7 = mongoose.model('fruits7', fruit7Schema)

module.exports = Fruits7