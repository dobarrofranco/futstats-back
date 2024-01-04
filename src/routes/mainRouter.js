const { Router } = require("express");
const playersRouter = require('./playersRouter');

const router = Router();

router.use('/players', playersRouter);

module.exports = router;
