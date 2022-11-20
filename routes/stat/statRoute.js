const express = require("express");
const router = express.Router();

// const mongoose = require("mongoose");
// const Stat = mongoose.model("Stat");

const StatController = require("../../controllers/stat");

router.post("/statOrder", StatController.stats);

router.get('/getStat', StatController.getStat)

module.exports = router;
