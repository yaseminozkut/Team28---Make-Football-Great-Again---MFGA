const express = require("express");
const router = express.Router();

const NewsController = require("../../controllers/news");

router.get('/news', NewsController.showNews);


module.exports = router;