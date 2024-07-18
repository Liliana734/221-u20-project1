const express = require('express');
const feedController = require('../controller/feedController');
const router = express.Router();

router.route('/feed')
    .put(feedController.updateFeedItems)
    .delete(feedController.deleteFeedItems);
router.route('/feedItems')
    .get(feedController.getAllFeedItems)
    .post(feedController.createFeedItems);
//router.route('/feed/:id')
  //  .post(feedController.createFeedItems)
    //.put(feedController.updateFeedItems)
    //.delete( feedController.deleteFeedItems);
module.exports = router;
