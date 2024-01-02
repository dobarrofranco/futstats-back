require("dotenv").config();
const { Sequelize } = require("sequelize");
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
const PlayerModel = require('./models/Player');
const TierlistModel = require('./models/Tierlist');

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/players`, {
  logging: false, 
  native: false, 
});

PlayerModel(sequelize);
TierlistModel(sequelize);

const { Player } = sequelize.models;
const { Tierlist } = sequelize.models;

Tierlist.hasMany(Player);
Player.belongsTo(Tierlist);

module.exports = {
  ...sequelize.models,
  conn: sequelize,
};