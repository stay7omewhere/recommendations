const mongoose = require('mongoose');

const db = mongoose.connection;

mongoose.connect('mongodb://localhost/airbnb', {
  useNewUrlParser: true,
});

const placeSchema = new mongoose.Schema({
  id: Number,
  url: String,
  title: String,
  city: String,
  plusVerified: Boolean,
  propertyType: String,
  price: Number,
  averageReview: Number,
  totalReviews: Number,
  savedList: [String],
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
