const express=require('express')
const app=express()
const server=require('http').Server(app)
const io=require('socket.io')(server)
const {v4:uuidV4}=require('uuid')

// by default folder name is views for ejs
app.set('view engine','ejs');
app.use(express.static('public'))

// uuidV4 generate random id for room
app.get('/',(req,res)=>{
  res.redirect(`/${uuidV4()}`)
})


app.get('/:room',(req,res)=>{
    res.render('room',{roomId:req.params.room})
})

// connecting rooms for users
io.on('connection',socket=>{
    console.log('connected')
    socket.on('join',(roomId,userId)=>{
        socket.join(roomId)
        //console.log(userId)
       socket.to(roomId).emit("users",userId)
    })
})

server.listen(3000)