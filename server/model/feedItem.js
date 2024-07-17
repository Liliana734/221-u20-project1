class FeedItem {
    constructor(title, body, linkUrl, imageUrl) {
        this.title = title;
        this.body = body;
        this.linkUrl = linkUrl;
        this.imageUrl = imageUrl;
    }
}

exports.createUser = function(id, title, body, linkUrl, imageUrl) {
    return new user(id, title,body,linkUrl,imageUrl);
};