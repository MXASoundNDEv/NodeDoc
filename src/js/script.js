const electron = require('electron');
const ipc = electron.ipcRenderer

// const remote = require('electron').remote;
// const win = remote.getCurrentWindow();

const NodeJs = document.getElementById("NodeJS")
NodeJs.addEventListener("click",function(){
    ipc.send("Doc","NodeJS")
})

const quit = document.getElementById("quit")
quit.addEventListener("click",function(){
    ipc.send("quit")
})

const reduce = document.getElementById("reduce")
reduce.addEventListener("click",function(){
    win.minimize();
})
