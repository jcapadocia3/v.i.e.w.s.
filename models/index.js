const User = require('./User');
const Mural = require('./Mural');

User.hasMany(Mural, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Mural.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Mural };
