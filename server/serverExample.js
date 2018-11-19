const path=require('path');
const http=require('http');
const express=require('express');
const socketIO= require('socket.io');


const publicPath=path.join(__dirname, '../public');
const port=process.env.PORT || 3000;

var app = express();
var server=http.createServer(app);
var io=socketIO(server);

app.use(express.static(publicPath));

 io.on('connection',(socket)=>{
   console.log('New user connected');

   socket.emit('newMessage',{
     from: 'mike',
     text: 'HI :)',
     createdAt: new Date().toString()
   });

   socket.on('createMessage',(newMessage)=>{
     console.log('createMessage: ',newMessage);
   });
   // socket.emit('newEmail',{
   //   from: 'mike@example.com',
   //   text: 'HI :)',
   //   createAt:123
   // });
   //
   // socket.on('createEmail',(newEmail)=>{
   //   console.log('createEmail: ',newEmail);
   // });

 socket.on('disconnect',()=>{
   console.log('Client disconnected');
 });

});



server.listen(3000, ()=>{
  console.log(`Server start listening on port ${port}`);
});
