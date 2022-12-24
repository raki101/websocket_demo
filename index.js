var express = require('express');
var app = express();
var socket = require('socket.io');


var server = app.listen(3000,(a,b)=>{
    console.log("server started");
});

app.use(express.static('public'));

//establishing socket connection
var io = socket(server);

io.on('connection',(socket)=>{
    console.log("made socket connection",socket.id);

    socket.on('chat',function(data){
        io.sockets.emit('chat',data);
    })
    
    socket.on('typing',function(data){
        socket.broadcast.emit('typing',data);
    })
}
)