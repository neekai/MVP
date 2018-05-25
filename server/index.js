const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const helmet = require('helmet');


const { router } = require('./router/index.js');
const app = express();
const PORT = 3000;
require('../database/config')

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', router);
app.use(express.static(path.join(__dirname, '../static')));


app.listen(PORT, (err) => {
    if(err){throw err; console.log('There is an error starting up the server')}
    else {
        console.log("Successfully connected to the server");
    }
});



