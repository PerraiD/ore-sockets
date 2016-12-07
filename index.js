var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'))

.get('/b/:borne_id/e/:entity_id/n/:nfc_id', function(request, response) {

  var borne_id  = request.params.borne_id  || request.body.borne_id; 
  var entity_id = request.params.entity_id || request.body.entity_id;
  var nfc_id = request.params.nfc_id || request.body.nfc_id;

  io.emit('nfc_readed', {borne_id: borne_id, nfc_id: nfc_id,entity_id: entity_id });
  res.json({borne_id: borne_id, nfc_id: nfc_id,entity_id: entity_id });
});

io.on('connection', function(){ 
  console.log("connection");
});

server.listen(app.get('port'));
