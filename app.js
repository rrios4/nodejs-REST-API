const express = require('express');
const request =  require('request');
const path = require('path');
const anime_api = require('./src/anime_api');

//Make the app in express
const app = express();

//Sets up the template engine
app.set('view engine', 'ejs');

//Sets the static folder
//app.use(express.static(path.join(__dirname, '/public')))

app.get('/',(req, res) => {
  let store = anime_api.searchAnime;
  anime_api.pageLoaded;
  //window.addEventListener("load", pageLoaded);
  res.render('homepage', {searchAnime: store});
});

app.get('/registration',(req, res) => {
  res.render('registration',{null: null});
});

app.get('/information',(req, res) => {
  res.render('information', {null2: null});
});


app.listen(8000, () => {
  console.log('Example app listening on port 8000!');
});