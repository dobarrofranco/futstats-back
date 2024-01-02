const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('Player', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tier: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    winMatches: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    lostMatches: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    winningPercentage: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};