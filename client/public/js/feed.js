document.addEventListener('DOMContentLoaded', function() {
    function goToMaristEdu() {
        window.location.ref = 'http://my.marist.edu';
    }

    document.getElementById('portal_button').addEventListener('click', goToMaristEdu);
    document.getElementById('portal_button_text').addEventListener('click', goToMaristEdu);

});

let currentStories = [];

currentStories.push({
    Title: 'Rennovations',
    Body: 'Marist College Commences a $60 Million Renovation of the Dyson',
    linkUrl: 'https://example.com/story1',
    imageUrl: 'images/dyson.png'
});

currentStories.push({
    Title: 'Dorms',
    Body: 'Marist Fancy New Dorm Rooms Just Ranked Top 10 in US',
    linkUrl: 'https://example.com/story2',
    imageUrl: 'images/dormss.png'
});

currentStories.push({
    Title: 'Graduates',
    Body: 'Congrats graduating class of 2024!!!',
    linkUrl: 'https://example.com/story3',
    imageUrl: 'images/grad.png'
});

function displayItem(feedItem) {
    let newsfeedElement = document.getElementById('newsfeed');
        
    let itemHTML = `
        <div class="feed-item">
            <h2><a href="${feedItem.linkUrl}" target="_blank">${feedItem.Title}</a></h2>
            <p>${feedItem.Body}</p>
            <a href="${feedItem.linkUrl}" target="_blank">
                <img src="${feedItem.imageUrl}" alt="${feedItem.Title}" style="max-width: 30%; height: 30%;">
            </a>
            <hr>
        </div>
    `;
    newsfeedElement.innerHTML += itemHTML;
}

currentStories.forEach(function(item) {
    displayItem(item);
});