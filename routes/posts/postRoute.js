const express = require("express");
const router = express.Router();

const PostController = require("../../controllers/postController");

router.post('/post', PostController.sendPost);

router.get('/getPost', PostController.getPost);

module.exports = router;