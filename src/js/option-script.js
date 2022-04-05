console.log("Script.js loading")
const electron = require('electron');
const ipc = electron.ipcRenderer

const quit = document.getElementById("quit")
quit.addEventListener("click",function(){
    ipc.send("quit")
})

const bck = document.getElementById("back")
bck.addEventListener("click",function(){
    history.back()
})

const pos = document.getElementById("")
pos.addEventListener("click",function(){
    ipc.send("SetPos")
})