const { app, BrowserWindow, electron, screen} = require('electron')
const ipc = require("electron").ipcMain

let MyDoc

const CreateMyDoc = () => {
    MyDoc = new BrowserWindow({
    width: 150,
    height: 300,
    x: 150,
    y: 300,
    resizable : false,
    frame : false,
    transparent: true,
    title: "MyDoc",
    icon: "icon.ico",
    //devtools : false,
    autoHideMenuBar : true,
    webPreferences:{
      nodeIntegration : true,
      contextIsolation: false,
    }
  })

  MyDoc.loadFile('src/html/index.html')
}

let Doc

function CreateDoc(Document){
  const primaryDisplay = screen.getPrimaryDisplay()
  const { width, height } = primaryDisplay.workAreaSize

  Doc = new BrowserWindow({
    width: width,
    height: height,
    resizable : true,
    frame : true,
    title: Document,
    autoHideMenuBar : true,
    webPreferences:{
      nodeIntegration : true,
      contextIsolation: false,
    }
  })

  Doc.loadFile(`src/${Document}/src/html/index.html`)

}

app.whenReady().then(() => {
  CreateMyDoc()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) CreateMyDoc()
  })

  ipc.on("quit",function(event){
    console.log("quit")
    app.quit()
  })
  
  ipc.on("reduce",function(event){
    console.log("reduce")
    // app.
  })
  

})


app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

ipc.on("Doc",function(event,MyDoc){
  console.log(`reception render ${MyDoc}`)
  if (MyDoc == 'NodeJS'){
    console.log("Creating NodeJS doc")
    CreateDoc(MyDoc)
  }
})