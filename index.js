var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'))

.get('/:borne/:nfc_id', function(request, response) {

  var borne  = request.params.borne || request.body.borne;
  var nfc_id = request.params.nfc_id || request.body.nfc_id;

  io.emit('some event', {borne: borne, nfc_id: nfc_id });
});

io.on('connection', function(){ 
  console.log("connection");
});

server.listen(app.get('port'));
