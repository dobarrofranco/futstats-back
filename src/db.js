require("dotenv").config();
const { Sequelize } = require("sequelize");
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
const PlayerModel = require('./models/Player');

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/players`, {
  logging: false, 
  native: false, 
});

PlayerModel(sequelize);

module.exports = {
  ...sequelize.models,
  conn: sequelize,
};