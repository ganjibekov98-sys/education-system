const http = require("http")
const express = require("express")
const { createConnection } = require("net")
const app = express()
const server = http.createServer(app)
app.use(express.static("index"))
const {Server} = require("socket.io")
const { text } = require("stream/consumers")

const io = new Server(server)
io.on("connection", (socket) => {
    socket.on("message", (texts) => {        
        io.emit("message", texts)
        console.log(texts)
    })
})
server.listen(3014, () => {
    console.log("The server's live on port 3014!")
})