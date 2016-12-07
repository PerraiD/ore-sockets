var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'))

.get('/b/:borne/e/:entity/n/:nfc_id', function(request, response) {
  
  var borne  = request.params.borne  || request.body.borne; 
  var entity = request.params.entity || request.body.entity;
  var nfc_id = request.params.nfc_id || request.body.nfc_id;

  io.emit('nfc_readed', {borne: borne, nfc_id: nfc_id,entity: entity });
});

io.on('connection', function(){ 
  console.log("connection");
});

server.listen(app.get('port'));
