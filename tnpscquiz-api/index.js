

var app = require('./server/server')
var config = require('./server/config/config');



var port = config.port;
app.listen(port, function () {
    console.log("app is running on " + port);
});
