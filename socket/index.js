const io =  require("socket.io") (8900, {
          cors: {
                    origin: "http://localhost:3000"
          }
})


let users = []


const addUser = (userId, socketId) => {
          !users.some((u) => u.userId === userId) && 
          users.push({ userId, socketId })
}


const removeUser = (socketId) => {
          users = users.filter((u) => u.socketId !== socketId)
}


const getUser = (userId) => {
          return users.find(us => us.userId === userId)
}

io.on("connection", (socket) => {
          // wn connedted
          console.log("A user connected")

          socket.on("addUser", userId => {
                    addUser(userId, socket.id)

                    io.emit("getUsers", users)

          })


          // send and get msg
          socket.on("sendMessage", ({ senderId, receiverId, text }) => {
                    const user = getUser(receiverId)

                    io.to(user.socket).emit("getMessage", {senderId, text})
          })


          // wn disconnedted
          socket.on("disconnect", () => {
                    console.log("a user disconneted")

                    removeUser(socket.id)

                    io.emit("getUsers", users)
          })
}) 

