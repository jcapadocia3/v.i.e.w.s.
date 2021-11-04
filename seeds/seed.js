const sequelize = require('../config/connection');
const { User, Mural, Review } = require('../models');

const userData = require('./userData.json');
const muralData = require('./muralData.json');
const reviewData = require('./reviewData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const mural of muralData) {
    await Mural.create({
      ...mural,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }
  
  for (const review of reviewData) {
    await Review.create({
      ...review,
    });
  }

  process.exit(0);
};

seedDatabase();


// // BELOW THIS IS JSON, BUT!! JSON files do not allow comments.
//   {
//     "mural_registration_id": "19304",
//     "artist_credit": "Ouizi",
//     "artwork_title": "West Town in bloom",
//     "year_installed": "2019",
//     "location_description": "1914 W. Chicago Ave"
//     '_image_URL': ''
//   },
//   {
//     "mural_registration_id": "19239",
//     "artist_credit": "Steven Teller",
//     "artwork_title": "An Ode to Eleanor (Youth)",
//     "year_installed": "2019",
//     "street_address": "835 W Montrose Ave"
//     '_image_URL': 'https://ibb.co/mh6ZpW0'
//   },
//   {
//     "mural_registration_id": "19245",
//     "artist_credit": "Eduardo Kobra",
//     "artwork_title": "Vivian Maier",
//     "media": "paint",
//     "year_installed": "2017",
//     "street_address": "1651-53 W North Ave"
//     '_image_URL': ''
//   },
//   {
//     "mural_registration_id": "19150",
//     "artist_credit": "Afrokilla",
//     "media": "Paint",
//     "year_installed": "2018",
//     "location_description": "Cards Against Humanity HQ",
//     "street_address": "1551 W Homer Street"
//     '_image_URL': 'https://ibb.co/KsjX3KM'
//   }
// ]

// hope to hyperlink the photos that display to artist blog/social media etc.