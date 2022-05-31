const router = require("express").Router();
const Movie = require("../models/Movie");

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

router.put("/:id", async (req, res) => {
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

router.delete("/:id", async (req, res) => {
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

router.get("/search", async (req, res) => {
    let listTemp = [];
    listTemp = await Movie.find();

    try {
        ids = [];
        listTemp.forEach(elem => {
            ids.push(elem._id);
        })
        res.status(200).json(ids);
    } catch (err) {
        res.status(500).json(err);
    }
})

//GET BY TITLE
router.get("/search/:query", async (req, res) => {
    const nameQuery = req.params.query;;
    let listTemp = [];
    try {
        listTemp = await Movie.find({ title: { $regex: '.*' + nameQuery + '.*', '$options' : 'i' } });
        ids = []
        listTemp.forEach(elem => {
            ids.push(elem._id);
        })
        res.status(200).json(ids);
    } catch (err) {
        res.status(500).json(err);
    }
}
);

module.exports = router;