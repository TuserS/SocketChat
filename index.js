const express = require('express')
const socket = require('socket.io')

const app = express()


app.use(express.static('public'))

const server = app.listen(4000, () => {
    console.log(`app runing on port 4000`);
})

const io = socket(server)

io.on('connection', (socket) => {
    console.log('connected')
    socket.on('msg', (data) => {
        io.sockets.emit('msg', data)
    })
})
