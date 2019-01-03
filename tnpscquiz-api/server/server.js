var express = require('express');
var app = express();
var handleError = require('./middleware/error')
var apiRoutes = require('./api/apiRoutes');
var path = require('path');


// setup the app middlware
require('./middleware/appMiddleware')(app);


var config = require('./config/config');

require('mongoose').connect(config.db.url);
app.use('/api/',apiRoutes);

app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res) {
    // Use res.sendfile, as it streams instead of reading the file into memory.
    res.sendfile(__dirname + '/public/');
});


app.use(handleError())
module.exports = app;