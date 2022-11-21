const express = require("express");
const router = express.Router();

// const mongoose = require("mongoose");
// const Stat = mongoose.model("Stat");

const RecentMatchController = require("../../controllers/recentMatch");

router.post("/recent", RecentMatchController.recent);

router.get('/getrecent', RecentMatchController.getRecent)

module.exports = router;
