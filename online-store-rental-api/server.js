const cors = require('cors');
const bodyParser = require('body-parser');
var express = require('express');
const app = express();

const mysql = require('mysql');

// const jwt = require('./_helpers/jwt');
// const errorHandler = require('./_helpers/error-handler');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// use JWT auth to secure the api
// app.use(jwt());

// global error handler
// app.use(errorHandler);


// connection configurations
const mc = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'movieshop'
});
 
// connect to database
mc.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to database');
});
global.db = mc;

// api routes
var routes = require('./routes/approutes'); //importing route
routes(app); //register the route


// start server
const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 4000;
const server = app.listen(port, function () {
    console.log('Server listening on port ' + port);
});