const { app, BrowserWindow, Menu } = require('electron')
var path = require('path')

function createWindow () {
  // Create the browser window.
  win = new BrowserWindow({
    width: 1000,
    height: 800,
    icon: path.join(__dirname, 'assets/icons/png/64x64.png')
  })

  // and load the index.html of the app.
  win.loadFile('app/index.html')

  win.webContents.openDevTools()

  Menu.setApplicationMenu();
}

app.on('ready', createWindow)
