// Import the Express framework, database connection configuration, routes module
const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');

// Get current working directory
const cwd = process.cwd();

// Set port number for the server
const PORT = 3001;

// Create instance of the Express application
const app = express();

// Note: not necessary for the Express server to function. This just helps indicate what activity's server is running in the terminal.
const activity = cwd.includes('01-Activities')
    ? cwd.split('/01-Activities/')[1]
    : cwd;

// Set up middleware to parse incoming data from HTML forms w/ urlencoded content type.
// 'extended: true' option allows parsing of rich objects and arrays.
app.use(express.urlencoded({ extended: true }));

// Set up middleware to parse incoming data w/ 'application/json' content type.
// Enables server to handle JSON data sent in request body.
app.use(express.json());

// Mount defined routes middleware on application.
// This allows application to use the defined routes for handling requests.
app.use(routes);

db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`API server for ${activity} running on port ${PORT}!`);
    });
});