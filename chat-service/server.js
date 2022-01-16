const http = require('http').createServer();

const io = require('socket.io')(http, {
    cors: { origin: "*" }
});

io.on('connection', (socket) => {
    console.log('New Connection');

    socket.on('get-doc', (preferences) =>     {
        let groupId = 10;
        socket.join(groupId);
        socket.broadcast.to(groupId).emit('go-to-room', groupId);   
    });

    socket.on('get-patient', (preferences) =>     {
        let groupId = 10;
        socket.join(groupId);
        socket.broadcast.to(groupId).emit('go-to-room', groupId);
    });

    socket.on('join-room', (groupId, userId) =>     {
        socket.join(groupId);
        socket.broadcast.to(groupId).emit('user-connect', userId);   
    });

    socket.on('message', (groupId, msg) =>     {
        socket.join(groupId);
        socket.broadcast.to(groupId).emit('message', msg);
    });
});

http.listen(process.env.PORT || 8080, process.env.HOST, () => {
    console.log(process.env.PORT || 8080);
});