const User = require('./User');
const Mural = require('./Mural');
const Review = require('./Review');

User.hasMany(Mural, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Mural.belongsTo(User, {
  foreignKey: 'user_id'
});

Review.belongsTo(Mural, {
  foreignKey: 'mural_id',
  foreignKey: 'user_id'
})

module.exports = { User, Mural, Review };
