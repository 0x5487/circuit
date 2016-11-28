const electron = require("electron")
const app = electron.app

const BrowserWin = electron.BrowserWindow

let mainWindow 

app.on('ready', _ => {
    console.log("main.js")
    mainWindow = new BrowserWin({
        height:400,
        width:400
    })

    mainWindow.loadURL(`file://${__dirname}/home.html`)
})