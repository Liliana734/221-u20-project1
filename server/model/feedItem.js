class FeedItem {
    constructor(id, purple,square, small, ten) {
        this.id = id;
        this.color = purple;
        this.shape = square;
        this.size = small;
        this.amount = ten;
    }
}


exports.createFeedItem = function(id, color, shape, size, amount) {
    return new FeedItem(id, color, shape, size, amount);
  };
