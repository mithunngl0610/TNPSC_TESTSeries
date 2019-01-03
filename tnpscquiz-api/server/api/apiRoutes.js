var router = require('express').Router();

router.use('/assesment', 
              require('./assesment/assesmentRoutes'))


              
              
module.exports = router;