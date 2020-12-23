var express = require('express'),
    router = express.Router(),
    Home = require('../controllers/home')

module.exports = function(app) { 
    router.get('/', Home.home);//var Home and controller home funtion in home.js //render the index.handlesbars of the site
    app.use(router);

};
