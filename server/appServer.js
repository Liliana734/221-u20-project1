const express = require('express')
const app = express();
const feedController = require('./server/controller/feedController');
app.use(express.static('client/public'));

app.get('/', function(req, res) {
    res.sendFile('index.html', {root: './client/views'})
})

app.get('/feed', function (rep,res){
    res.sendFile('feed.html', {root: './client/views'})
})

app.listen(1337, () => console.log('Listening on port 1337.'))

//API endpoints

const userRoutes = require ("./routes/userRouts");
app.user("/app/users", userRoutes);

app.listen(1337,() => console.log('Listening on port 1337.'))