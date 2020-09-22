const express = require('express');
const app = express()
require('dotenv').config()
const bodyParser = require('body-parser')
const cors = require('cors')
const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('bug_tracking', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

const connectDatabase = async() => {
    try {
        await sequelize.authenticate()
            .then(() => {
                console.log('Connection has been established successfully.');
            })
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

connectDatabase()


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
app.use('/', apiStatus)

// Application Setup
var server = app.listen(process.env.PORT, function() {
    console.log('Server listening to http://localhost:' + process.env.PORT);
})

// Serving static files
app.use(express.static('public'));