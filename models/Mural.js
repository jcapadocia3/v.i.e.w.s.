const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Mural extends Model {}

// define fields on Mural table:

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

    // user_id: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: 'user',
    //     key: 'id',
    //   },
    // },

    zip: {
      type: DataTypes.INTEGER,
    },

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
