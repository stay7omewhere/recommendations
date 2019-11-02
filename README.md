# Recommedantions Service

> Displays listings nearby

## API
  
  - GET /api/room/:id/recommendations
    - gets all recommended rooms for the room with id :id
    - returns a json object with the information of all the recommended rooms in format 

    [
        {
            "title": "Raising Revenue",
            "author_first_name": "Jane",
            "author_last_name": "Smith",
            "author_email": "jane.smith@example.gov",
            "year": "2012",
            "month": "August",
            "day": "18",
            "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ante ut augue scelerisque ornare. Aliquam tempus rhoncus quam vel luctus. Sed scelerisque fermentum fringilla. Suspendisse tincidunt nisl a metus feugiat vitae vestibulum enim vulputate. Quisque vehicula dictum elit, vitae cursus libero auctor sed. Vestibulum fermentum elementum nunc. Proin aliquam erat in turpis vehicula sit amet tristique lorem blandit. Nam augue est, bibendum et ultrices non, interdum in est. Quisque gravida orci lobortis... "
        }
    ]
  - POST /api/room/:id/recommendations
    - posts a new recommnendation to the room with id :id
    - does not return anything
  - DELETE /api/room/:id/recommendations/:recid
    - deletes the recommendation with id :recid for the room with id :id
    - return the id of the deleted recommendation
  - PUT /api/room/:id/recommendations/:recid 
    - replaces the recommendendation at id :recid with the recommendation sent in the request body
    - return the original recommnedation id

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

