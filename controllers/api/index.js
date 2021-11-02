const router = require('express').Router();
const userRoutes = require('./userRoutes');
const muralRoutes = require('./muralRoutes');

router.use('/users', userRoutes);
router.use('/murals', muralRoutes);
// router.use(/'reviews', reviewsRoutes);

module.exports = router;