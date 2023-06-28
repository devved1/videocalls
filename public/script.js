const socket= io('/')

socket.emit('join',room,15)

socket.on("users",userId=>{
    console.log(userId)
})

