const { Router } = require("express");
const { createPlayer } = require('../controllers/index'); 

const router = Router();

router.post('/', createPlayer);

module.exports = router;
