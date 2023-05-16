const bodyParser = require('body-parser');
const express = require('express');
var con = require('./connection');



var app = express();
//middlewares 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.get('/', (req, res) => {
    res.send('Hello World!');
});

// middleware to use for all requests
app.use('/inventory', require('./routes/inventoryRoutes'));


app.listen(5001, () => {
    console.log('Server is up on port 5001');
});