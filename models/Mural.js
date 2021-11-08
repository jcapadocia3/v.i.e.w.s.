const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Mural extends Model {}

Mural.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    
    // artwork title
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    // credited artist
    artist: {
      type: DataTypes.STRING,
    },

    // year the artwork was installed
    year_installed: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },

    // need to also add: street addy + art description if in the API(?)+ image holder
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    
    },
    zip: {
      type: DataTypes.INTEGER,
    },
    // full address vs zip...?
    address: {
      type: DataTypes.STRING,
    },

  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'mural',
  }
);

module.exports = Mural;
