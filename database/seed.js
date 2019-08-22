const faker = require('faker');
const model = require('./index.js');

const fakeList = [];

model.db.once('open', () => {
  // delete all collections
  const deletePromises = [
    model.db.dropCollection('activities').catch(() => {

    }),
    model.db.dropCollection('places').catch(() => {

    }),
    model.db.dropCollection('savedlists').catch(() => {

    }),
  ];

  // once all collectiosn deleted, generate data
  Promise.all(deletePromises).then(() => {
    const savedListPromises = [];
    for (let i = 0; i < 5; i += 1) {
      fakeList.push(faker.lorem.word());
      const saveListName = new model.SavedList({
        name: fakeList[i],
      });
      savedListPromises.push(saveListName.save());
    }
    return Promise.all(savedListPromises);
  }).then(() => {
    const newPlacesPromises = [];
    for (let i = 1; i < 101; i += 1) {
      // generates random review ratings
      const reviews = [];
      const length = Math.floor(Math.random() * 100 + 100);
      for (let j = 0; i < length; j += 1) {
        reviews.push(Math.floor(Math.random() * 3 + 3));
      }

      // randomly chooses true or false
      let plusVerified = true;
      if (Math.random() > 0.5) {
        plusVerified = false;
      }

      // randomly choost savedList
      const savedList = fakeList.slice(Math.floor(Math.random() * 6));

      // generates a places data
      const newPlace = new model.Place({
        id: i,
        url: `https://mock-property-images.s3-us-west-1.amazonaws.com/houses/house-${i}.jpeg`,
        title: faker.lorem.sentence(),
        city: faker.address.city(),
        plusVerified,
        propertyType: faker.lorem.words(),
        price: Math.floor(Math.random() * 200 + 100),
        reviews,
        savedList,
      });
      newPlacesPromises.push(newPlace.save());
    }
    return Promise.all(newPlacesPromises);
  }).then(() => {
    const newActivitiesPromises = [];
    for (let i = 1; i < 101; i += 1) {
      // generates random review ratings
      const reviews = [];
      const length = Math.floor(Math.random() * 100 + 100);
      for (let j = 0; i < length; j += 1) {
        reviews.push(Math.floor(Math.random() * 3 + 3));
      }

      // generate saved list
      const savedList = fakeList.slice(Math.floor(Math.random() * 6));

      const newActivity = new model.Activity({
        url: `https://mock-property-images.s3-us-west-1.amazonaws.com/activities/fun-${i}.jpeg`,
        title: faker.lorem.sentence(),
        category: faker.lorem.words(),
        price: Math.floor(Math.random() * 100 + 50),
        reviews,
        savedList,
      });
      newActivitiesPromises.push(newActivity.save());
    }
    return Promise.all(newActivitiesPromises);
  })
    .then(() => {
      process.exit();
    });
});
