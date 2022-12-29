const express = require("express");
const router = express.Router();

const PlayerStatsController = require("../../controllers/playerStatsController");


router.get('/getTopScorer', PlayerStatsController.getTopScorer);
router.get('/getTopAssist', PlayerStatsController.getTopAssist);
module.exports = router;