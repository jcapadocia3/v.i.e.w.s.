const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Review extends Model {}

// define fields on Review table:

Review.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    review: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    // foreign key from mural.js
    mural_id: {
      type: DataTypes.INTEGER,
      // mural.id
      references: {
        model: "mural",
        key: "id",
      },
    },

    // foreign key from user.js
    user_id: {
      type: DataTypes.INTEGER,
      // user.id
      references: {
        model: "user",
        key: "id",
      },
    },
  },

  {
    // linking to database connection
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "review",
  }
);

module.exports = Review;
