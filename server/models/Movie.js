const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema(
  {
    title: { type: String },
    director: { type: String },
    desc: { type: String },
    img: { type: String },
    trailer: { type: String },
    year: { type: String },
    genre: { type: String },
    duration: { type: String },
    rating: { type: Number },
    themes: { type: Array },
    noVotes: {type : Number}
  },
  { timestamps: true }
);

module.exports = mongoose.model("Movie", MovieSchema);