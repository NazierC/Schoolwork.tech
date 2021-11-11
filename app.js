const socket = io('ws://192.168.1.99:8080');

 
var text = document.getElementById('text');
var send = document.getElementById("send");
 
document.getElementById("send").addEventListener("click", function(){
    
        if(text.value != " ")
        {
            socket.emit("Create",text.value);
        }

})
socket.on('newURL', data => {
    window.location = data;
})