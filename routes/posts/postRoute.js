const express = require("express");
const router = express.Router();

const auth = require('../../middleware/auth');

const PostController = require("../../controllers/postController");

router.post('/post', auth, PostController.sendPost);

router.get('/getUserPost', auth , PostController.getUserPost);

router.get('/getAllPost', PostController.getAllPost);

router.put('/likeIncrement', auth, PostController.likeIncrement);

router.post('/commentPost', auth, PostController.commentPost);

module.exports = router;