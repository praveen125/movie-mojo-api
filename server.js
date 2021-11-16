const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");
const cors = require("cors");

const app = express();

//Connect Database
connectDB();

app.use(express.json());
app.use(cors());

app.use(bodyParser.json());

app.use(require("./routes/movies"));

app.get("/", (req, res) => {
  res.send("Welcome to Movie Mojo API Sever");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
