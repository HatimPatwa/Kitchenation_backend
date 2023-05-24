const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
var con = require('./connection');

dotenv = require('dotenv');
dotenv.config();


var app = express();
//middlewares 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors(   ))


app.get('/', (req, res) => {
    res.send('Hello World!');
});

// middleware to use for all requests
app.use('/inventory', require('./routes/inventoryRoutes'));

const port = process.env.PORT || 5001;
app.listen(port, () => {
    console.log('Server is up on port ' + port);
});