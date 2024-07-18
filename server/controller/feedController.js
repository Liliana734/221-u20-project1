//demo 7/18/24
//window.addEventListener("load", ()=> { 
  //  console.log("load fuction");
    //fetch('/api/feed/1').then((res) => (
      //  res.text().then((data) =>(
        //    console.log(data);
        //));
    //));
//});



const FeedItem = require('../model/feedItem');


let feedItems = [];
let one = FeedItem.createFeedItem(1, "purple", "sqaure", "small","ten");
feedItems.push(one);
console.log(feedItems);
let currentId = 1;


exports.getAllFeedItems = (req, res) => {
    req.body;
    res.setHeader('Content-Type', 'application/json');
    res.send(feedItems);
};


exports.createFeedItems = (req, res) => {
    const { color, shape, size, amount } = req.body;
    const newFeedItem = new FeedItem(currentId++, color, shape, size, amount);
    feedItems.push(newFeedItem);
    res.setHeader('Content-Type', 'application/json');
    res.status(201).send(newFeedItem);
};


exports.getFeedItemsById = (req, res) => {
    const { id } = req.params;
    const feedItem = feedItems.find(item => item.id === parseInt(id));
    if (feedItem) {
        res.setHeader('Content-Type', 'application/json');
        res.send(feedItem);
    } else {
        res.status(404).send({ message: 'Feed item not found' });
    }
};


exports.updateFeedItems = (req, res) => {
    const { id } = req.params;
    const { color, shape, size, amount } = req.body;
    let feedItem = feedItems.find(item => item.id === parseInt(id));
    if (feedItem) {
        feedItem.color = color || feedItem.color;
        feedItem.shape = shape || feedItem.shape;
        feedItem.size = size || feedItem.size;
        feedItem.amount = amount || feedItem.amount;
        res.setHeader('Content-Type', 'application/json');
        res.send(feedItem);
    } else {
        res.status(404).send({ message: 'Feed item not found' });
    }
};


exports.deleteFeedItems = (req, res) => {
    const { id } = req.params;
    const index = feedItems.findIndex(item => item.id === parseInt(id));
    if (index !== -1) {
        const deletedItem = feedItems.splice(index, 1);
        res.setHeader('Content-Type', 'application/json');
        res.send(deletedItem[0]);
    } else {
        res.status(404).send({ message: 'Feed item not found' });
    }
};
