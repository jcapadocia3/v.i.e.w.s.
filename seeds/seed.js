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

