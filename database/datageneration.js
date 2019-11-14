const faker = require('faker');
const fs = require('fs');

const generateRooms = (stream, callback) => {
  const roomTypes = ['Entire Apartment', 'Entire House ', 'Entire Loft', 'Entire Condo ','Entire Lodge', 'Entire Cottage', 'Entire Flat', 'Entire Villa ', 'Entire Suite ', 'Entire Penthouse ','Entire Studio', 'Private Room', 'Hotel Room'];
  const createRoom = (i) => {
    const room = [
      i,
      faker.lorem.sentence(),
      `https://picsum.photos/id/${faker.random.number({min:1,max:1000})}/480/360`,
      faker.random.number({ min: 30, max: 800 }),
      (Math.random() * (5 - 3) + 3).toPrecision(3),
      faker.address.country().replace(',',''),
      faker.random.number({min:10, max:365}),
      faker.random.arrayElement(roomTypes),
      faker.random.number({ min: 1, max: 8 }),
      faker.random.boolean()
    ];
    return room.join(',');
  };

  const headers = [
    'id', 'name', 'image', 'price', 'rating', 'location', 'availability', 'type','availableBeds','plus'];
  let i = 0;
  const n = 10000000;
  const write = (cb) => {
    let ok = true;
    do {
      i += 1;
      if (i === n) {
        stream.write(`${createRoom(i)}\n`, 'utf8', cb);
      } else {
        ok = stream.write(`${createRoom(i)}\n`);
      }
    } while (i < n && ok);
    if (i < n) {
      stream.once('drain', write);
    }
  };
  stream.write(`${headers.join(',')}\n`);
  write(callback);
};

const rTestStream = fs.createWriteStream('database/data.csv');
generateRooms(rTestStream, () => {
  rTestStream.end();
});
