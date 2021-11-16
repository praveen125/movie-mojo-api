const mongoose = require("mongoose");
const ArtistSchema = require("./ArtistSchema").schema;

const Schema = mongoose.Schema;

const MovieSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  genre: {
    type: String,
  },
  released: {
    type: String,
  },
  about: {
    type: String,
  },
  rating: {
    type: String,
  },
  artists: [ArtistSchema],
  keywords: [{ type: String }],
});

const movie = mongoose.model("movie", MovieSchema);

module.exports = movie;
