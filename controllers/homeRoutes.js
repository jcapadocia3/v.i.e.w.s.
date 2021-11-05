const router = require('express').Router();
const { Mural, User, Review } = require('../models');
const withAuth = require('../utils/auth');
// const homepage = require('../public/html/homepage.html');

const muralData = null;

// Use withAuth middleware to prevent access to route

router.get('/', withAuth, async (req, res) => {
  try {
      res.render('login')
  } catch (err) {
      res.status(500).json(err);
  }
});

router.get('/home/users/:id', async (req, res) => {
  try {
      res.render('homepage')

      const userData = await User.findAll({
        where:{
          id: req.params.id,
        }
      });

  } catch (err) {
      res.status(500).json(err);
  }
});

router.get('/mural/:id', async (req, res) => {
  try {
    // Get all murals and JOIN with user data
    const reviewData = await Review.findAll({
      where:{
        mural_id: req.params.id,
      }

    });

    // Serialize data so the template can read it
    const reviews = reviewData.map((review) => review.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('mural', { 
      reviews, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', async (req, res) => {
  try {
      res.render('login')
  } catch (err) {
      res.status(500).json(err);
  }
}); 

router.get('/signup', async (req, res) => {
  try {
      res.render('signup')
  } catch (err) {
      res.status(500).json(err);
  }
});

router.get('/home', async (req, res) => {
  try {
      res.render('guesthomepage')
  } catch (err) {
      res.status(500).json(err);
  }
});

module.exports = router;

// heroku test