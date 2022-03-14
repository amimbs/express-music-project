const express = require('express');
const app = express();
const artitsts = require('./artists');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// 3. Create a front page ('/') that tells about your music artist. Include a couple of pictures

app.get('/artist/:artist_name', (req, res) => {
    let artist_name = req.params.artist_name 
    let foundArtist = artitsts.find((artist) => artist.name === artist_name);

    res.json(foundArtist.name);
  })

  app.listen(3000, function () {
    console.log('App is now listening on port 3000...');
  });