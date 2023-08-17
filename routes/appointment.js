const express = require('express');
const Router = express.Router();
const controller = require('../controllers/appointment');

Router.post('/product', controller.submit);
Router.get('/index', controller.fetchData);
Router.get('/delete/:deleteID', controller.delete);
Router.get('edit/editID', controller.edit);

module.exports = Router;