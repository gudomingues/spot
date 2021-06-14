const express = require('express');
const cors = require('cors');
const app = express();
const request = require('request');
var SpotifyWebApi = require('spotify-web-api-node');

const clientId = 'd06a615fa75a4fe1a177b7461ddcc21d'
const clientSecret = '52c63a2cb1204c7685b726a1aaaa3699'
const redirectUri = 'http://localhost:8888/callback';
var accessToken = '';
var refreshToken = '';

var spotifyApi = new SpotifyWebApi({
    clientId: clientId,
    clientSecret: clientSecret,
    redirectUri: redirectUri
});


app.use(cors());
app.use(express.json())
app.listen(8888);

app.get('/album/:id', (req, res, next) => {
    spotifyApi.searchTracks(req.params.id, { limit: 10, offset: 20 })
        .then(function (data) {
            res.status(200).send(data.body);
        }, function (err) {
            res.status(404).send(err);
        });

});
app.get('/album/:id/tracks', (req, res, next) => {
    spotifyApi.getAlbumTracks(req.params.id, { limit: 5, offset: 1 })
        .then(function (data) {
            res.status(200).send(data.body.items);
        }, function (err) {
            res.status(404).send(err);
        });

});
app.get('/login', function (req, res) {

    res.redirect('https://accounts.spotify.com/authorize' +
        '?response_type=code' +
        '&client_id=' + clientId +
        '&redirect_uri=' + encodeURIComponent(redirectUri));
});

app.get('/callback', function (req, res) {

    request.post(
        'https://accounts.spotify.com/api/token', {
        form: {
            grant_type: 'authorization_code',
            code: req.query.code,
            redirect_uri: 'http://localhost:8888/callback',
            client_id: clientId,
            client_secret: clientSecret,
        }
    },
        (error, response, body) => {
            console.log(`statusCode: ${res.statusCode}`)
            let tokens = JSON.parse(body);
            console.log(tokens);
            accessToken = tokens.access_token;
            refreshToken = tokens.refresh_token;
            spotifyApi.setAccessToken(accessToken);
            res.redirect('http://localhost:3000/search');
        }
    )


});