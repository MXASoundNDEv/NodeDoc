console.log("Script.js loading")
const electron = require('electron');
const ipc = electron.ipcRenderer


const NodeJs = document.getElementById("NodeJS")
NodeJs.addEventListener("click",function(){
    ipc.send("Doc","NodeJS")
})

const quit = document.getElementById("quit")
quit.addEventListener("click",function(){
    ipc.send("quit")
})

const optn = document.getElementById("option")
optn.addEventListener("click",function(){
   window.location.href = "../html/option.html"
})