const{ app, BrowserWindow } =  require('electron')

let win;
function createWindow(){

    win = new BrowserWindow({
        width: 1000,
        height: 600,
        backgroundColor: '#ffffff'
    });

    win.loadURL('file://' + __dirname + '/dist/index.html');
}

app.on('ready', createWindow);