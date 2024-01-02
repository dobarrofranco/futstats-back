const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Tierlist', {
        tierS: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        tierA: {
            type: DataTypes.STRING,
        },
        tierB: {
            type: DataTypes.STRING,
        },
        tierC: {
            type: DataTypes.STRING,
        },
        tierD: {
            type: DataTypes.STRING,
        },
    });
}