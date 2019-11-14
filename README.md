# Recommedantions Service

> Displays listings nearby

## API
  - USE /rooms/:id --serves static files
  - GET /api/room/:roomid
    - request body is empty
    - gets data for the room with id:room id
    - returns a json object with the information of the room in this format:
    [
      {
        roomId:integer,
        roomName:string,
        roomPrice:integer,
        roomLocation:string
        roomType:string,
        roomRating:integer
      }
    ]
  - GET /api/room/:roomid/user/:userid/recommendations
    - request body is empty
    - gets all recommended rooms for the room with id :roomid to the user :userid
    - returns a json object with the information of all the recommended rooms in format 
    [
      {
        roomId:integer,
        roomName:string,
        roomPrice:integer,
        roomLocation:string
        roomType:string,
        roomRating:integer
      }
    ]
  - POST /api/room/:roomid/user/:userid/recommendations/:recid
    - request body is empty
    - creates a recommendation relationship between the room at :roomid to the user at :userid
  - DELETE /api/room/:roomid/user/:userid/recommendations/:recid
    - request body is empty
    - deletes the recommendation with id :recid for the room with id :roomid for the user with :userid
    - returns completed status code
  - PUT /api/room/:roomid/user/:userid/recommendations/:recid 
    - updates the recommendendation at id :recid with the recommendation for the user sent in the request body
    - request body has to be formatted in this way(only roomId is required):
      {
        roomId:integer,
        roomName:string,
        roomPrice:integer,
        roomLocation:string
        roomType:string,
        roomRating:integer 
      }
    - return completeted status code

## Related Projects

  - https://github.com/haab-solutions/photo-gallery-module
  - https://github.com/haab-solutions/reviews-module
  - https://github.com/haab-solutions/recommendations-module
  - https://github.com/haab-solutions/reservation-module

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> Setup config.js in ./database/

## Requirements

- Node 10.16

## Development

- npm run seed
- npm run build:dev
- npm run start:dev

### Installing Dependencies

From within the root directory:

```sh
npm install
```

