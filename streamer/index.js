const app = require('express')()
const server = require('http').createServer(app)
const cors = require('cors')

const io = require('socket.io')(server, {
    cors: {
        origin: '*',
        methods:['GET','POST']
        }
    })
    
app.use(cors())

const PORT = process.env.port || 5001

app.get('/', (req, res) => {
    res.send('server is running')
})

io.on('connection',() => {
    socket.emit('me', socket.id)

    socket.on('disconnect', () => {
        
    })
})

server.listen(PORT, () => console.log(`Server listening on port ${PORT}`))