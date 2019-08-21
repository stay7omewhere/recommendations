var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/airbnb');

var placeSchema = new mongoose.Schema ({
  id: Number,
  url: String,
  title: String,
  city: String,
  plusVerified: Boolean,
  propertyType: String,
  price: Number,
  reviews: [Number],
  savedList: [String]
});

var place = mongoose.model('Places', placeSchema);

var activitySchema = new mongoose.Schema ({
  id: Number,
  url: String,
  title: String,
  category: String,
  reviews: [Number],
  savedList: [String]
});

var activity = mongoose.model('Activity', activitySchema);

var savedListSchema = new mongoose.Schema ({
  name: String
});

var savedList = mongoose.model('SavedList', savedListSchema);

