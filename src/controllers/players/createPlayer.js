const { Player, Tierlist } = require('../../db');
const { Op } = require('sequelize');

const createPlayer = async (req, res) => {

    const { name, tier, winMatches, lostMatches, winningPercentage } = req.body;

    try {

        const newPlayer = await Player.create({ name, tier, winMatches, lostMatches, winningPercentage });

        if (newPlayer) {
            return res.status(200).json(newPlayer);
        } else {
            return res.status(400).json({ error: 'not be possible to create player' });
        }


    } catch (error) {
        res.status(500).json({ error: error.message });
    }

}

module.exports = createPlayer;