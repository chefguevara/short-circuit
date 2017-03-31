import {app, BrowserWindow, ipcMain  } from 'electron';
import installExtension, { REACT_DEVELOPER_TOOLS } from 'electron-devtools-installer';


let mainWindow;
app.on('ready', () => {
    mainWindow = new BrowserWindow({
        height: 768,
        width: 1024
    });

    installExtension(REACT_DEVELOPER_TOOLS)
        .then((name) => console.log(`Added Extension:  ${name}`))
        .catch((err) => console.log('An error occurred: ', err));


    ipcMain.on('login', (event, user) => {
        //authenticate
    });

    mainWindow.loadURL(`file://${__dirname}/../view/index.html`);
    mainWindow.on('close', _ => {
        mainWindow = null;
    });
});
