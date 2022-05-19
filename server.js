const http = require('http');
const express = require('express')
const data = require('./data');
const { application } = require('express');

const hostname = '127.0.0.1';
const port = 3000;

//creates express app handles all the requests 
const app = express()

// creates http server requests handled by express
const server = http.createServer(app)

//load static files from public folder before other routes
app.use(express.static('./public'))

app.get('/api/v1/characters', (req, res) => {
    res.json(data.characters)
});

app.get('/api/v1/episodes', (req, res) => {
    res.json(data.episodes)
});

app.get('/api/v1/characters/:characterID', (req, res) => {
    const characterId = req.params.characterID
    let character = null
    for (let currentCharacter of data.characters) {
        if (currentCharacter.characterID == characterId) {
            character = currentCharacter
        }
    }
    if (character === null) {
        res.status(404).json({ error: 'could not find character with id: ' + characterId })
    }
    res.json(character)
});

app.get('/api/v1/episodes/:seasonNum', (req, res) => {
    const seasonNum = req.params.seasonNum
    let season = null
    for (i = 0; i < data.episodes.length; i++) {
        // console.log(data.episodes[i].episodes)
        if (data.episodes[i].season == seasonNum) {
            season = data.episodes[i].episodes

            console.log(season)
        }
    }
    if (season === null) {
        res.status(404).json({ error: 'could not find season: ' + seasonNum });
    }
    res.json(season)
})

//catch any missing pages
app.get('*', (req, res) => {
    res.send('Page not found')
})

//listens for requests
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});