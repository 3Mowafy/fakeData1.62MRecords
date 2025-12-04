const { default: mongoose } = require("mongoose");
const mogoose = require("mongoose");

const fakeDataSchema = mongoose.Schema(
  {
    name: String,
    description: String,
    price: Number,
    category: String,
    avatar: String
  },
  { timestamps: true }
);

module.exports = mongoose.model("fake", fakeDataSchema);
