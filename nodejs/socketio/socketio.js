var express = require('express');
var app = express();
app.get('/',function(req,res){
  res.status(200).send('webcome to donglc!');
});

//页面添加完毕还要记得在服务端socktio.js中为它添加路由，让我们可以访问测试网页：
app.get('/index',function(req,res){
   res.sendFile('index.html',{root:__dirname});
});

var server = require('http').createServer(app);
var io = require('socket.io')(server);//cket.io的服务端启动非常的简单，引用socket.io模块。





//服务端注册常用事件  
io.of("home").on('connection',function(socket){//connection事件在客户端成功连接到服务端时触发
		  var query = socket.request._query;
     var sid = query.sid; 
     console.log(query);


	
      socket.send('server helloword!');
      socket.on('message',function(data){
      //收到消息
      console.log(data);
     
      //	socket.leave('home');//进到别的房间去了 ，不提供服务了
      
      
       socket.on('disconnect',function(){
       	//在connection事件的回调函数中，我们还是可以为socket注册一些常用的事件,如：disconnect事件，它在客户端连接断开是触发，这时候我就知道用户已经离开了。
         //用户已经离开...
     	});
  });
});



server.listen(888);
//然后调用listen函数，传入监听的端口号，开始服务监听。