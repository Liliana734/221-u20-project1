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
let currentId = 1;


// Initial seed data
let one = FeedItem.createFeedItem(
    currentId++,
    "purple",
    "square",
    "small",
    "ten",
);
feedItems.push(one);
console.log(feedItems);


// GET all feed items
exports.getAllFeedItems = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).send(feedItems);
};


// POST a new feed item
exports.createFeedItems = (req, res) => {
    const { color, shape, size, amount} = req.body;
   
    // Validate request body
    if (!color || !shape|| !size || !amount) {
        return res.status(400).send({ message: 'All fields are required' });
    }


    const newFeedItem = FeedItem.createFeedItem(
        currentId++,
        color,
        shape,
        size,
        amount,
    );


    feedItems.push(newFeedItem);
    res.setHeader('Content-Type', 'application/json');
    res.status(201).send(newFeedItem);
};


// PUT (update) a feed item by ID
exports.updateFeedItems = (req, res) => {
    const { id } = req.params;
    const { Marist, School, Flower, city, Youtuber, Game } = req.body;


    const feedItem = feedItems.find(item => item.id === parseInt(id));
    if (feedItem) {
        feedItem.color = color || feedItem.color;
        feedItem.shape = shape || feedItem.shape;
        feedItem.size = size || feedItem.size;
        feedItem.amount = amount || feedItem.amount;
        res.setHeader('Content-Type', 'application/json');
        res.status(200).send(feedItem);
    }
    else {
        res.status(404).send({ message: 'Feed item not found' });
    }
};


// DELETE a feed item by ID
exports.deleteFeedItems = (req, res) => {
    const { id } = req.params;
    const index = feedItems.findIndex(item => item.id === parseInt(id));


    if (index !== -1) {
        const deletedItem = feedItems.splice(index, 1);
        res.setHeader('Content-Type', 'application/json');
        res.status(200).send(deletedItem[0]);
    } else {
        res.status(404).send({ message: 'Feed item not found' });
    }
};

