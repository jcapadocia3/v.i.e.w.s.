const router = require('express').Router();

// API token + variables
apiKey = "a61kll6mp4sc4toyfx7atfuw1";
var queryURL =
  "https://data.cityofchicago.org/resource/we8h-apcf.json" + apiKey;
var userSearch = "";
var myData = undefined;


const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;
