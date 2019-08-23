const faker = require('faker');
const model = require('./index.js');

const fakeList = [];

model.db.once('open', () => {
  // delete all collections
  const deletePromises = [
    model.db.dropCollection('places').catch(() => {

    }),
    model.db.dropCollection('savedlists').catch(() => {

    }),
  ];

  // once all collectiosn deleted, generate data
  Promise.all(deletePromises).then(() => {
    const savedLists = [];
    for (let i = 0; i < 5; i += 1) {
      fakeList.push(faker.lorem.word());
      const saveListName = {
        name: fakeList[i],
      };
      savedLists.push(saveListName);
    }
    return model.SavedList.create(savedLists);
  }).then(() => {
    const newPlaces = [];
    for (let i = 1; i < 101; i += 1) {
      // randomly chooses true or false
      let plusVerified = true;
      if (Math.random() > 0.5) {
        plusVerified = false;
      }

      // randomly choost savedList
      const savedList = fakeList.slice(Math.floor(Math.random() * 6));

      // generates a places data
      const newPlace = {
        id: i,
        url: `https://mock-property-images.s3-us-west-1.amazonaws.com/houses/house-${i}.jpeg`,
        title: faker.lorem.sentence(),
        city: faker.address.city(),
        plusVerified,
        propertyType: faker.lorem.words(),
        price: Math.floor(Math.random() * 200 + 100),
        averageReview: Math.random() + 4,
        totalReview: Math.floor(Math.random() * 100 + 100),
        savedList,
      };
      newPlaces.push(newPlace);
    }

    return model.Place.create(newPlaces);
  }).then(() => {
    process.exit();
  });
});
