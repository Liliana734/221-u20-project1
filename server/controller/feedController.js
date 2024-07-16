const FeedItem = require('../model/feedItem');


let allFeedItems = [];


exports.addFeedItem = function(id, title, content) {
    const newFeedItem = new FeedItem(id, title, content);
    allFeedItems.push(newFeedItem);
    return newFeedItem;
};


exports.getAllFeedItems = function() {
    return allFeedItems;
};

exports.getAllsers = (req,res) => {
    res.SetHeader ('Cotet-Type', 'application/json');
    res.send(JSON.stringify(user.userArray[2]));
}