const { Mongoose, Schema } = require("mongoose");

const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    place: {
      type: String,
      required: true,
    },
    dish: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Blog", BlogSchema);
