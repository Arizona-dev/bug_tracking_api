const express = require('express');
const app = express()
require('dotenv').config()
const bodyParser = require('body-parser')
const cors = require('cors')


var corsOptions = {
    origin: "localhost"
}

// Middlewares
app.use(cors(corsOptions))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Import Routes
const apiStatus = require('./api/routes/api')

// Route Middlewares
app.use('/api/', apiStatus)

// Application Setup
var server = app.listen(process.env.PORT, function() {
    console.log('Server listening to http://localhost:'+process.env.PORT);
})

// Serving static files
app.use(express.static('public'));