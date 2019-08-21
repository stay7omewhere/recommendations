var mongoose = require('mongoose');
var faker = require('faker');


mongoose.connect('mongodb://localhost/airbnb', {
  useNewUrlParser: true
}).then(()=>{
  mongoose.connection.db.dropCollection('activities');
  mongoose.connection.db.dropCollection('places');
  mongoose.connection.db.dropCollection('savedlists');
});

var placeSchema = new mongoose.Schema ({
  url: String,
  title: String,
  city: String,
  plusVerified: Boolean,
  propertyType: String,
  price: Number,
  reviews: [Number],
  savedList: [String]
});

var Place = mongoose.model('Places', placeSchema);

var activitySchema = new mongoose.Schema ({
  url: String,
  title: String,
  category: String,
  price: Number,
  reviews: [Number],
  savedList: [String]
});

var Activity = mongoose.model('Activity', activitySchema);

var savedListSchema = new mongoose.Schema ({
  name: String
});

var SavedList = mongoose.model('SavedList', savedListSchema);

let fakeList = [];
for (let i = 0; i < 5; i++) {
  fakeList.push(faker.lorem.word());
  let saveListName = new SavedList({
    name: fakeList[i]
  });
  saveListName.save();
}

for (let i = 1; i < 101; i++) {
  
  //generates random review ratings
  let reviews = [];
  let length = Math.floor(Math.random() * 100 + 100);
  for (let i = 0; i < length; i++) {
    reviews.push(Math.floor(Math.random() * 3 + 3));
  }

  //randomly chooses true or false
  let plusVerified = true;
  if (Math.random() > 0.5) {
    plusVerified = false;
  }

  //randomly choost savedList
  let savedList = fakeList.slice(Math.floor(Math.random() * 6));

  //generates a places data
  let newPlace = new Place({
    url: `https://mock-property-images.s3-us-west-1.amazonaws.com/houses/house-${i}.jpeg`,
    title: faker.lorem.sentence(),
    city: faker.address.city(),
    plusVerified,
    propertyType: faker.lorem.words(),
    price: Math.floor(Math.random() * 200 + 100),
    reviews,
    savedList,
  });
  newPlace.save();
}

for (let i = 1; i < 101; i++) {
  //generates random review ratings
  let reviews = [];
  let length = Math.floor(Math.random() * 100 + 100);
  for (let i = 0; i < length; i++) {
    reviews.push(Math.floor(Math.random() * 3 + 3));
  }

  //generate saved list
  let savedList = fakeList.slice(Math.floor(Math.random() * 6));

  let newActivity = new Activity({
    url: `https://mock-property-images.s3-us-west-1.amazonaws.com/activities/fun-${i}.jpeg`,
    title: faker.lorem.sentence(),
    category: faker.lorem.words(),
    price: Math.floor(Math.random() * 100 + 50),
    reviews,
    savedList,
  });

  newActivity.save();
}




