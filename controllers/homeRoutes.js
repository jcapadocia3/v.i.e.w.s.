const router = require('express').Router();
const { Mural, User, Review } = require('../models');
const withAuth = require('../utils/auth');
// const homepage = require('../public/html/homepage.html');

const muralData = null;

// Use withAuth middleware to prevent access to route

router.get('/', async (req, res) => {
  try {
      res.render('login');
  } catch (err) {
      res.status(500).json(err);
  }
});

router.get('/home/users/:id', withAuth, async (req, res) => {
  try {

    const loginData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Mural }],
    });

    const user = loginData.get({ plain: true });

      res.render('homepage', {
        ...user,
      logged_in: true
      });

      const userData = await User.findAll({
        where:{
          id: req.params.id,
        },
      });

  } catch (err) {
      res.status(500).json(err);
  }
});

router.get('/mural/:id', withAuth, async (req, res) => {
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

router.post('/signup', async (req, res) => {
  try {
    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get('/home/users/:id', async (req, res) => {
  try {
      res.render('login')
  } catch (err) {
      res.status(500).json(err);
  }
});

router.get('/review', async (req, res) => {
  try {
      res.render('mural')
  } catch (err) {
      res.status(500).json(err);
  }
});

router.post('/review', async (req, res) => {
  try {
    // Get all murals and JOIN with user data
    // const reviewData = await Review.create({
    //   ...req.body,
      // rating: req.body.rating,
      // user_id: req.session.user_id,
      console.log(req.body);
      const reviewData = await Review.create({...req.body, user_id: req.session.user_id});
      res.status(200).json(reviewData);
    
  } catch (err) {
    res.status(400).json(err);
    console.log(err);
  }
});

router.get('/guest', async (req, res) => {
  try {
      res.render('guesthomepage')
  } catch (err) {
      res.status(500).json(err);
  }
});

module.exports = router;
