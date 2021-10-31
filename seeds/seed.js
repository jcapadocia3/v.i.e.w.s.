const sequelize = require('../config/connection');
const { User, Project } = require('../models');

const userData = require('./userData.json');
const projectData = require('./projectData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const project of projectData) {
    await Project.create({
      ...project,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();


// // BELOW THIS IS JSON, BUT!! JSON files do not allow comments. Placeholder area for muralData.json (currently projectData.json) for merge rzns
// [
//   {
//     "mural_registration_id": "19304",
//     "artist_credit": "Ouizi",
//     "artwork_title": "West Town in bloom",
//     "year_installed": "2019",
//     "location_description": "1914 W. Chicago Ave"
//   },
//   {
//     "mural_registration_id": "19239",
//     "artist_credit": "Steven Teller",
//     "artwork_title": "An Ode to Eleanor (Youth)",
//     "year_installed": "2019",
//     "street_address": "835 W Montrose Ave"
//   },
//   {
//     "mural_registration_id": "19245",
//     "artist_credit": "Eduardo Kobra",
//     "artwork_title": "Vivian Maier",
//     "media": "paint",
//     "year_installed": "2017",
//     "street_address": "1651-53 W North Ave"
//   },
//   {
//     "mural_registration_id": "19150",
//     "artist_credit": "Afrokilla",
//     "media": "Paint",
//     "year_installed": "2018",
//     "location_description": "Cards Against Humanity HQ",
//     "street_address": "1551 W Homer Street"
//   }
// ]