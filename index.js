const { app, BrowserWindow, nativeTheme } = require('electron')

let mainWindow

app.on('ready', ()=> {
    mainWindow = new BrowserWindow({
        autoHideMenuBar: true,
        icon: './src/icon.png',
        
    })
    nativeTheme.themeSource = 'dark'
    
    mainWindow.loadURL(`file://${__dirname}/index.html`)
})