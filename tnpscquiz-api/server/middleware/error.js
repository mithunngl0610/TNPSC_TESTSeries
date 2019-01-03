var logger = require('../util/logger');
var handleError = function () {

    return function err(err, req, res, next) {
        console.log(err.message);
        if (err.name === 'UnauthorizedError') {
            res.status(401).send('Invalid token');
            return;
        }
        logger.error(err.stack);
        res.status(500).send("This is from Middleware")
    }

}

module.exports = handleError;