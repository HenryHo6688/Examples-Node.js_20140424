var express = require('express');

// 建�?�?? Express 伺�???
var app = express();

// 設�??��?檔�???��?��?
app.use(express.static(__dirname + '/public'));

// GET?��??�路?��??��??��???myroute?�路�?
app.get('/myroute', function(req, res) {
    // ?��?字串?��?覽器
    res.send('This is GET method');
    res.end();
});

// POST?��??�路?��??��??��????�路�?
app.post('/myroute', function(req, res) {
    // ?��?字串?��?覽器
    res.send('This is POST method');
    res.end();
});

app.listen(12345);

