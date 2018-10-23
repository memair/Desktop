const { app, BrowserWindow, Menu } = require('electron')
var path = require('path')

  let mainWindow;
  let menuTemplate = [
      {
          label: "Window Manager",
          submenu: [
              { label: "create New" }
          ]
      },
      {
        label : "View",
              submenu : [
          { role : "reload" },
          { label : "custom reload" }
          ]
      }
  ];

  function createWindow () {
    // Create the browser window.
    win = new BrowserWindow({
      width: 800,
      height: 600,
      icon: path.join(__dirname, 'assets/icons/png/64x64.png')
    })

    // and load the index.html of the app.
    win.loadFile('index.html')

    let menu = Menu.buildFromTemplate(menuTemplate);
    Menu.setApplicationMenu(menu);
  }

  app.on('ready', createWindow)
