// Create web server
// Create a route for comments
// Use the comments module to get the comments
// Send the comments back as JSON
// Start the server

const express = require('express');
const comments = require('./comments');

const app = express();

app.get('/comments', (req, res) => {
    res.json(comments.getComments());
});

app.listen(3000);

// Run the server, call the comments.js file, and test the route to see if it works
// Open the browser and go to localhost:3000/comments
// The comments will be displayed in the browser
// The comments will be displayed in JSON format