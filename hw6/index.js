const socket = require('socket.io');
const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http
    .createServer(((req, res) => {
        const indexPath = path.join(__dirname, 'index.html');
        const readStream = fs.createReadStream(indexPath);

        readStream.pipe(res);
    }));

const io = socket(server);

const connectedUsers = [];

io.on('connection', client => {
    connectedUsers.push(client);
    const payload = {
        message: client.id,
    };
    client.broadcast.emit('connectedUser', payload);
    client.emit('connectedUser', payload);

    client.on('disconnect', () => {
        connectedUsers.splice(connectedUsers.indexOf(client), 1)
        client.broadcast.emit('disconnectedUser', payload);
        client.emit('disconnectedUser', payload);
    });

    client.on('send-msg', data => {
        const payload = {
            message: data.message,
            name: data.name,
            className: data.className,
        };
        client.broadcast.emit('add-msg', payload);
        client.emit('add-msg', payload);
    });

    const count = {
        length: connectedUsers.length,

    };
    client.emit('countUsers', count);

});

server.listen(5555);
