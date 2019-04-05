const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

const server = app
    .listen(port, () => {
        console.log(`Server started on: http://localhost:${port}`);
    })
    .on('error', err => {
        console.log('Error starting server')
    })

module.exports = server;

app.use(express.static("public"));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});
