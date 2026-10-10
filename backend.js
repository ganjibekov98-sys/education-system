const http = require("http")
const express = require("express")

const app = express()
const server = http.createServer(app)
app.use(express.static("index"))
const {Server} = require("socket.io")

const io = new Server(server)
io.on("connection", (socket) => {
    socket.on("message", (texts) => {        
        io.emit("message", texts)
        console.log(texts)
    })
})
const PORT = process.env.PORT || 3015;

server.listen(PORT, () => {
    console.log(`The server's live on port ${PORT}!`);
});
