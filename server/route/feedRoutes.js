const express = require('express');
const feedController = require('../controller/feedController');
const router = express.Router();

router.get('/feed-items', feedController.getAllFeedItems);
router.post('/feed-items', feedController.getAllFeedItems);
router.put('/feed-items/:id', feedController.updateFeedItems);
router.delete('/feed-items/:id', feedController.deleteFeedItems);
module.exports = router;
