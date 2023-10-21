const express = require('express');
const router = express.Router();
const postsController = require('../controllers/postsController');

// Create a new post
router.post('/create', postsController.createPost);

module.exports = router;
