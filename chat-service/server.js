const http = require('http').createServer();

const io = require('socket.io')(http, {
    cors: { origin: "*" }
});

io.on('connection', (socket) => {
    console.log('New Connection');

    socket.on('join-group', (groupId, userId) =>     {
        socket.join(groupId);
        socket.broadcast.to(groupId).emit('user-connect', userId);   
    });
});

http.listen(process.env.PORT || 8080, process.env.HOST);