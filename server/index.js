const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const authRoute = require("./routes/auth");
const carouselRoute = require("./routes/carousels")
const movieRoute = require("./routes/movies");
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true })
    .then(() => console.log("DB Connection Successfull!"))
    .catch(err => console.log(err));
const cors = require('cors')


const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors())
app.use(express.json());

app.get("/", function (req, res) {
    res.send("Hello");
})


app.use("/api/auth", authRoute);
app.use("/api/movies", movieRoute);
app.use("/api/carousels", carouselRoute);


app.listen(4000, function () {
    console.log("Backend server is running on port 4000");
});
