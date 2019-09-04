const mongoose = require('mongoose');

const db = mongoose.connection;

mongoose.connect('mongodb://172.17.0.2/airbnb', {
  useNewUrlParser: true,
});

const placeSchema = new mongoose.Schema({
  id: Number,
  url: String,
  title: String,
  city: String,
  state: String,
  country: String,
  plusVerified: Boolean,
  propertyType: String,
  price: Number,
  averageReview: Number,
  totalReviews: Number,
  savedList: [String],
  about: String,
  theSpace: String,
  neighborhood: String,
});

const Place = mongoose.model('Places', placeSchema);

const savedListSchema = new mongoose.Schema({
  name: String,
});

const SavedList = mongoose.model('SavedList', savedListSchema);

module.exports = {
  db,
  SavedList,
  Place,
};
