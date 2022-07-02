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


app.use("/api/auth", authRoute);
app.use("/api/movies", movieRoute);
app.use("/api/carousels", carouselRoute);

app.use(express.static(path.join(__dirname, "/client/build")));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/build', 'index.html'));
});

const PORT = process.env.PORT || '4000'

app.set("port", PORT);