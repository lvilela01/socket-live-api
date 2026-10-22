const express = require('express')
const http = require('http')
const { Server } = require('socket.io')
const cors = require('cors')

const app = express()
app.use(cors())
const server = http.createServer(app)

// Inicia o Socket.IO e permite ligações do Frontend
const io = new Server(server, { cors: { origin: "*"}})

let activePlayers = 0

// Quando alguém entra no site
io.on("connection", (socket) => {
  activePlayers++
  // Emite o número atualizado para TODOS os ecrãs conectados
  io.emit("players_update", activePlayers)

  socket.on("send_bet", (data)=>{
    io.emit("bet_received", data)
  })

  // Quando alguém fecha a aba do navegador
  socket.on("disconnect", () => {
    activePlayers--
    io.emit("players_update", activePlayers)

    socket.on('send_bet', (data) => {
    // Reenvia a mensagem da aposta para todos os browsers conectados
    io.emit('bet_received', data);
  });
  })
})

server.listen(3001, () => console.log("Backend Socket on port 3001"))
