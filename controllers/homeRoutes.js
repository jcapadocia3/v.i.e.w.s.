const router = require('express').Router();
const { Mural, User } = require('../models');
const withAuth = require('../utils/auth');
// const homepage = require('../public/html/homepage.html');

router.get('/', async (req, res) => {
  try {
    // Get all murals and JOIN with user data
    const muralData = await Mural.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    // Serialize data so the template can read it
    const murals = muralData.map((mural) => mural.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('homepage', { 
      murals, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/mural/:id', async (req, res) => {
  try {
    const muralData = await Mural.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const mural = muralData.get({ plain: true });

    res.render('mural', {
      ...mural,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route

router.get('/home', (req, res) => {
  console.log("it works!");
  debugger;
  res.render('homepage');
});

// router.get('/homepage', withAuth, async (req, res) => {
//   try {
//     // Find the logged in user based on the session ID
//     const userData = await User.findByPk(req.session.user_id, {
//       attributes: { exclude: ['password'] },
//       include: [{ model: Project }],
//     });

//     const user = userData.get({ plain: true });

//     res.render('homepage', {
//       ...user,
//       logged_in: true
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

router.get('/reviews', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

module.exports = router;
