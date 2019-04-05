const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;
const favicon = require('serve-favicon');

const server = app
    .listen(port, () => {
        console.log(`Server started on: http://localhost:${port}`);
    })
    .on('error', err => {
        console.log('Error starting server')
    })

module.exports = server;

app.use(express.static("public"));
app.use(favicon(path.join(__dirname,'public','img','favicon.ico')));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});