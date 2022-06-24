const express = require("express");
const app = express();
const path = require('path');

const port = process.env.PORT || 80;


//server init
app.listen(port, function () {
    console.log('Hosting listening on port ' + port + '!');
  });

  app.get('/', function(req,res){
    res.set("Content-Security-Policy", "default-src 'self' https://www.google-analytics.com https://ssl.google-analytics.com https://www.googletagmanager.com https://stats.g.doubleclick.net; style-src 'self' 'unsafe-inline'; script-src-elem 'self' 'sha256-ILYfERQx1fJqNwJrh3993aj1ARBdlFLiOpYHPNRT6is=' https://www.googletagmanager.com https://www.google-analytics.com https://ssl.google-analytics.com");
    console.log(req.headers['x-forwarded-for'] || req.socket.remoteAddress);
    if(!(req.headers['x-forwarded-for'] || req.socket.remoteAddress == "::ffff:45.61.187.215")) res.sendFile(path.join(__dirname, 'index.html'));
    else console.log("IP bloqueada")
  })

  app.use('/media', express.static(__dirname + '/media'));
  app.use('/css', express.static(__dirname + '/css'));
  app.use('/js', express.static(__dirname + '/js'));