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
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // change to artist name
    artist: {
      type: DataTypes.STRING,
    },
    // not all of the API contains start dates
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    // change to year_installed, change to integer
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
      allowNull: false,
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
