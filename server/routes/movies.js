const router = require("express").Router();
const Movie = require("../models/Movie");
const verify = require("../verifyToken");

//CREATE

router.post("/", async (req, res) => {
    const newMovie = new Movie(req.body);
    try {
        const savedMovie = await newMovie.save();
        res.status(201).json(savedMovie);
    } catch (err) {
        res.status(500).json(err);
    }
});

//UPDATE

router.put("/:id", verify, async (req, res) => {
    try {
        const updatedMovie = await Movie.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            { new: true }
        );
        res.status(200).json(updatedMovie);
    } catch (err) {
        res.status(500).json(err);
    }
});

//DELETE

router.delete("/:id", verify, async (req, res) => {
    try {
        await Movie.findByIdAndDelete(req.params.id);
        res.status(200).json("The movie has been deleted...");
    } catch (err) {
        res.status(500).json(err);
    }
});

//GET

router.get("/find/:id", async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id);
        res.status(200).json(movie);
    } catch (err) {
        res.status(500).json(err);
    }
});

//GET RANDOM

router.get("/random", async (req, res) => {
    let movie;
    try {
        movie = await Movie.aggregate([
            { $sample: { size: 1 } },]);
        res.status(200).json(movie);
    } catch (err) {
        res.status(500).json(err);
    }
});

//GET ALL

router.get("/", async (req, res) => {
    try {
        const movies = await Movie.find();
        res.status(200).json(movies.reverse());
    } catch (err) {
        res.status(500).json(err);
    }
}
);

module.exports = router;