const fs = require('fs');
//const https = require('https');
const http = require('http');
const WebSocketServer = require('ws').Server;
const express = require("express");
const bodyParser = require("body-parser");

const serverConfig = {
    key: fs.readFileSync('./server.key'),
    cert: fs.readFileSync('./server.crt'),
};

const app = express();
//const HTTPS_PORT = 5000;
const HTTP_PORT = 5000;

//const httpsServer = https.createServer(serverConfig, app).listen(process.env.PORT || HTTPS_PORT);
const httpServer = http.createServer(serverConfig, app).listen(process.env.PORT || HTTP_PORT);

//var wss = new WebSocketServer({server: httpsServer});

//wss.on('connection', function(ws) {
//    ws.on('message', function(message) {
//        wss.broadcast(message);
//    });
//});

//wss.broadcast = function(data) {
//    for(var i in this.clients) {
//        this.clients[i].send(data);
//    }
//};

app.get(/^(.+)$/, function(req, res){ 
    switch(req.params[0]) {
        case '/prueba.html':
            res.send("prueba ok\n");
            break;
    //default: res.sendFile( __dirname + req.params[0]); 
    default: res.send('nuevo cambio con github webhook\n'); 
    }
 });

console.log('servidor corriendo');
