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
  reviews: [Number],
  savedList: [String],
});

const Place = mongoose.model('Places', placeSchema);

const activitySchema = new mongoose.Schema({
  url: String,
  title: String,
  category: String,
  price: Number,
  reviews: [Number],
  savedList: [String],
});

const Activity = mongoose.model('Activity', activitySchema);

const savedListSchema = new mongoose.Schema({
  name: String,
});

const SavedList = mongoose.model('SavedList', savedListSchema);

module.exports = {
  db,
  SavedList,
  Place,
  Activity,
};
