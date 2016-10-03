'use strict';

var express = require('express');
var useragent = require('useragent');

var app = express();
var port = process.env.PORT || 3000;

app.get('/', function(req, res) {
    var ip = req.ip;
    var language = req.headers['accept-language'];
    var agent = useragent.parse(req.headers['user-agent']);

    agent = agent.os.toString();
    language = language.split(',')[0];

    var responseObject = {
        "ipaddress": ip,
        "language": language,
        "software": agent
    };

    res.send(responseObject);

});

app.listen(port, function() {
    console.log('Listening on port 3000...')
});