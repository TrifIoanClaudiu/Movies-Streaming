const mongoose = require("mongoose");

const CarouselSchema = new mongoose.Schema(
    {
        title: { type: String },
        genre: { type: String },
        content: { type: Array }
    },
    { timestamps: true }
);

module.exports = mongoose.model("Carousel", CarouselSchema);