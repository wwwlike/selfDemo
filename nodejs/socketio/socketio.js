var express = require('express');
var app = express();
app.get('/',function(req,res){
  res.status(200).send('webcome to donglc!');
});

//ҳ�������ϻ�Ҫ�ǵ��ڷ����socktio.js��Ϊ�����·�ɣ������ǿ��Է��ʲ�����ҳ��
app.get('/index',function(req,res){
   res.sendFile('index.html',{root:__dirname});
});

var server = require('http').createServer(app);
var io = require('socket.io')(server);//cket.io�ķ���������ǳ��ļ򵥣�����socket.ioģ�顣





//�����ע�᳣���¼�  
io.of("home").on('connection',function(socket){//connection�¼��ڿͻ��˳ɹ����ӵ������ʱ����
		  var query = socket.request._query;
     var sid = query.sid; 
     console.log(query);


	
      socket.send('server helloword!');
      socket.on('message',function(data){
      //�յ���Ϣ
      console.log(data);
     
      //	socket.leave('home');//������ķ���ȥ�� �����ṩ������
      
      
       socket.on('disconnect',function(){
       	//��connection�¼��Ļص������У����ǻ��ǿ���Ϊsocketע��һЩ���õ��¼�,�磺disconnect�¼������ڿͻ������ӶϿ��Ǵ�������ʱ���Ҿ�֪���û��Ѿ��뿪�ˡ�
         //�û��Ѿ��뿪...
     	});
  });
});



server.listen(888);
//Ȼ�����listen��������������Ķ˿ںţ���ʼ���������