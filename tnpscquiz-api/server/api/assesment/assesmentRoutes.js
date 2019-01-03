var router = require('express').Router();
var controller = require('./assesmentController');

router.route('/').
   get(controller.get);
module.exports = router;