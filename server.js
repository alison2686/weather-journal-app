// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');
// Start up an instance of app
const app = express();
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
const { response } = require('express');
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const port = 8000;
const server = app.listen(port, listening);

// console.log to test if server is running

function listening() {
    console.log(`Server is running on localhost: ${port}`);
}

// Add GET route that returns projectData

app.get('/all', (req, res) => {
    res.send(projectData);
});

// POST route that adds incoming data to projectData

app.post('/addWeatherData', addWeatherData);

const addWeatherData = (req, res) => {
    projectData.temp = req.body.temp;
    projectData.date = req.body.date;
    projectData.content = req.body.content;
    
    console.log(projectData);
   
    res.send(projectData);
};