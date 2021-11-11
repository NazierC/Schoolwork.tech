const socket = io("ws://localhost:3000");

 
var text = document.getElementById('text');
var send = document.getElementById("send");
 
document.getElementById("send").addEventListener("click", function(){
    
        if(text.innerText != " ")
        {
            socket.emit("source",text.innerText)
        }

})
socket.on('NewURL', data => {
     
})