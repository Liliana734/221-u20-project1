let pic = {name: 'name', image:'/images/name-1.jpeg'}
let pic2 = {name: 'name2', image:'/images/name-1.jpeg'}

let feed = {}
feed.push(pic);
feed.push(pic2);
feed.push(pic3);

//window.download
window.onload = () => {
    //console.log("feed");
    let feedhtml = document.getElementById('feed');

    for(let i=0; i<feed.length; i++){
        //console.log(feed[i].image);
        feed.innerHtml += feed[i].name;
        feedhtml.innerHtml += "<img class = 'feeding' src='/image/_.jpeg'" + feed[i].image + "/>";k
        //or
        //feedHtml = feedHtml + feedHtml[i].name;

    }
}