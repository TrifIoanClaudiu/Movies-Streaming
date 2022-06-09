const router = require("express").Router();
const { aggregate } = require("../models/Carousel");
const Carousel = require("../models/Carousel");
const Movie = require("../models/Movie");



//CREATE
router.post("/", async (req, res) => {
  const newCarousel = new Carousel(req.body);

  try {
    const savedCarousel = await newCarousel.save();
    res.status(200).json(savedCarousel);
  } catch (err) {
    res.status(500).json(err);
  }
})


//DELETE
router.delete("/:id", async (req, res) => {
  try {
    await Carousel.findByIdAndDelete(req.params.id);
    res.status(200).json("Carousel Deleted");
  } catch (err) {
    res.status(500).json(err);
  }
})


//Create Newest Movies

router.post("/newest", async (req, res) => {
  let carouselTemp = [];
  carouselTemp = await Movie.find().sort({ createdAt: -1 }).limit(10);

  try {
    ids = []
    carouselTemp.forEach(elem => {
      ids.push(elem._id);
    })
    const newCarousel = new Carousel({
      title: "Recently Added",
      genre: "Newest",
      content: ids,
    });
    newCarousel.save();
    res.status(200).json(newCarousel);
  }
  catch (err) {
    res.status(500).json(err)
  }
});


//Update Newest

router.put("/newest", async (req, res) => {
  let carouselTemp = [];
  carouselTemp = await Movie.find().sort({ createdAt: -1 }).limit(10);

  try {
    const filter = "62842ba06591b83c8d84e5df"
    ids = []
    carouselTemp.forEach(elem => {
      ids.push(elem._id);
    })
    const update = { content: ids };
    const updatedCarousel = await Carousel.findByIdAndUpdate(filter, update, {
      new: true
    });
    res.status(200).json(updatedCarousel);
  }
  catch (err) {
    res.status(500).json(err)
  }
});

//Create Golden Age
router.post("/golden", async (req, res) => {
  let carouselTemp = [];
  carouselTemp = await Movie.aggregate([
    {$match: {$expr: {$and: [ { $gte: [{$toInt: "$year"},1939]},
                    {$lte: [{$toInt: "$year"}, 1959 ]} ]}}},{ $sample: { size: 10 } }])
  try {
    ids = []
    carouselTemp.forEach(elem => {
      ids.push(elem._id);
    })
    const newCarousel = new Carousel({
      title: "Golden Age Movies",
      genre: "Golden",
      content: ids,
    });
    newCarousel.save();
    res.status(200).json(newCarousel);
  }
  catch (err) {
    res.status(500).json(err)
  }


});
//Update Golden Age
router.put("/golden", async (req, res) => {
  let carouselTemp = [];
  carouselTemp = await Movie.aggregate([
    { $match: {$expr: {$and: [
            { $gte: [{ $toInt: "$year" }, 1939] },
            { $lte: [{ $toInt: "$year" }, 1959] }]
        } } },   { $sample: { size: 10 } }
  ])
  try {
    const filter = "62841311530eca1fab06d36c"
    ids = []
    carouselTemp.forEach(elem => {
      ids.push(elem._id);
    })
    const update = { content: ids };
    const updatedCarousel = await Carousel.findByIdAndUpdate(filter, update, {
      new: true
    });
    res.status(200).json(updatedCarousel);
  }
  catch (err) {
    res.status(500).json(err)

  }
});
//Create Best Rated Movies
router.post("/rating", async (req, res) => {
  let carouselTemp = [];
  carouselTemp = await Movie.find().sort({ rating: -1 }).limit(10);

  try {
    ids = []
    carouselTemp.forEach(elem => {
      ids.push(elem._id);
    })
    const newCarousel = new Carousel({
      title: "Best Rated Movies",
      genre: "BestRated",
      content: ids,
    });
    newCarousel.save();
    res.status(200).json(newCarousel);
  }
  catch (err) {
    res.status(500).json(err)
  }
});


//UPDATE BEST MOVIES

router.put("/rating", async (req, res) => {
  let carouselTemp = [];
  carouselTemp = await Movie.find().sort({ rating: -1 }).limit(10);
  try {
    const filter = "62842c01b04edea9aaba9931"
    ids = []
    carouselTemp.forEach(elem => {
      ids.push(elem._id);
    })
    const update = { content: ids };
    const updatedCarousel = await Carousel.findByIdAndUpdate(filter, update, {
      new: true
    });
    res.status(200).json(updatedCarousel);
  }
  catch (err) {
    res.status(500).json(err)
  }

});



//GET
router.get("/", async (req, res) => {
  const genreQuery = req.query.genre;
  let carousel = [];
  try {
    if (genreQuery) {
      carousel = await Carousel.aggregate([
        { $sample: { size: 10 } },
        { $match: { genre: genreQuery } },
      ]);
    } else {
      carousel = await Carousel.aggregate([{ $sample: { size: 10 } }]);
    }
    res.status(200).json(carousel);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GetSpecific

router.get("/:genre", async (req, res) => {
  let carousel = [];
  try {
    carousel = await Carousel.find(
      { genre: req.params.genre },
    );
    res.status(200).json(carousel);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Create By Genre
router.post("/genres/:genre", async (req, res) => {
  let carouselTemp = [];
  carouselTemp = await Movie.aggregate([
    { $match: { genre: req.params.genre } },
    { $sample: { size: 10 } }
  ]);
  try {
    ids = []
    carouselTemp.forEach(elem => {
      ids.push(elem._id);
    })
    const newCarousel = new Carousel({
      title: req.params.genre,
      genre: req.params.genre,
      content: ids,
    });
    newCarousel.save();
    res.status(200).json(newCarousel);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Update Same Director

router.put("/:director", async (req, res) => {
  let carouselTemp = [];
  carouselTemp = await Movie.aggregate([
    { $match: { director: req.params.director }, },
    { $sample: { size: 10 } }
  ]);
  try {
    const filter = "6284ff3fda319a1b2f97858b"
    ids = []
    carouselTemp.forEach(elem => {
      ids.push(elem._id);
    })
    const update = { content: ids };
    const updatedCarousel = await Carousel.findByIdAndUpdate(filter, update, {
      new: true
    });
    res.status(200).json(updatedCarousel);
  }
  catch (err) {
    res.status(500).json(err)
  }
})

module.exports = router;