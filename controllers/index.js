const router = require('express').Router();

// // API token + variables TO BE PROTECTED WITH .ENV FILE / work in progress heh
// apiKey = process.env.MURAL_API_KEY;
// var queryURL =
//   "https://data.cityofchicago.org/resource/we8h-apcf.json" + apiKey;
// var userSearch = "";
// var myData = undefined;


const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;
