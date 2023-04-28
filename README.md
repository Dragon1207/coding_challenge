# Tate Modern Art API
This is an API for the Tate Modern art collection data set. It allows users to create new users, view art data, and create comments for each art entry.

## Endpoints
- GET /api/art: View the entire art data set
- GET /api/art/:id: View art data by ID
- POST /api/art/:id/comments: Add a comment for an art data entry
- POST /api/users: Create a new user
- GET /api/users: View all users

## Installation
1. Clone this repository to your local machine.
2. Install the necessary dependencies using `npm install`.
3. Set up a PostgreSQL database and enter the database credentials in the `config/config.json` file.
4. Create db and run the migration scripts using `npx sequelize-cli db:create & npx sequelize-cli db:migrate`.
5. Start the server using `npm start`.

## Usage
Make requests to the above endpoints to interact with the API. All responses are in JSON format.

## Error Handling
Each endpoint has either a success or failed HTTP code and the necessary message as the response.

## Technologies Used
- Node.js
- Express
- PostgreSQL
- Sequelize

## Contributors
Miguel Cortez