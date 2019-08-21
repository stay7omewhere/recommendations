const model = require('./index.js');
const faker = require('faker');
let fakeList = [];

model.db.once('open', ()=>{
  //delete all collections
  let deletePromises = [
    model.db.dropCollection('activities').catch(()=>{
      return;
    }),
    model.db.dropCollection('places').catch(()=>{
      return;
    }),
    model.db.dropCollection('savedlists').catch(()=>{
      return;
    }),
  ];

  //once all collectiosn deleted, generate data
  Promise.all(deletePromises).then(()=>{
    let savedListPromises = [];
    for (let i = 0; i < 5; i++) {
      fakeList.push(faker.lorem.word());
      let saveListName = new model.SavedList({
        name: fakeList[i]
      });
      savedListPromises.push(saveListName.save());
    }
    return Promise.all(savedListPromises);
    
  }).then(()=>{
    let newPlacesPromises = [];
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
      let newPlace = new model.Place({
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
  }).then(()=>{
    let newActivitiesPromises = [];
    for (let i = 1; i < 101; i++) {
      //generates random review ratings
      let reviews = [];
      let length = Math.floor(Math.random() * 100 + 100);
      for (let i = 0; i < length; i++) {
        reviews.push(Math.floor(Math.random() * 3 + 3));
      }
      //generate saved list
      let savedList = fakeList.slice(Math.floor(Math.random() * 6));

      let newActivity = new model.Activity({
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
  }).then(()=>{
    process.exit();
  });
});








