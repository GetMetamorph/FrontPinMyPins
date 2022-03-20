const express = require('express');
const ejs = require('ejs');
const app = express();
const http = require('http');
const server = http.createServer(app);

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('pages/index');
});

server.listen(3000, () => {
    console.log('listening on *:3000');
});
