const { app, BrowserWindow } = require('electron')
const path = require('path')

const createWindow = () => {
  const doc = new BrowserWindow({
    width: 900,
    height: 800,
    resizable : true,
    frame : true,
    title: "NodeDoc",
    icon: "icon.ico",
    //devtools : false,
    autoHideMenuBar : true,
    webPreferences:{
      nodeIntegration : true,
    }
  })

  doc.loadFile('src/html/index.html')
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})


app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})