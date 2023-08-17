const express = require('express');
const path = require('path');
const app = express();
const sequelize = require('./models/appointment');
const form = require('./routes/appointment');
const bodyParser = require('body-parser');


app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'views')));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', form);

const port = process.env.PORT || 3333;
sequelize
    .sync()
    .then(() =>{
        app.listen(port);
    })
    .catch(err => console.log('Error while running server : ',err));