const { app, BrowserWindow, ipcMain, globalShortcut } = require('electron/main');
const path = require('path');
const fs = require('fs');
const { json } = require('react-router-dom');

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true,
      contextIsolation: true
    },
  });
  win.loadURL('http://localhost:3000');
}

app.whenReady().then(() => {
  createWindow();
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });

  globalShortcut.register('CommandOrControl+R', () => {})
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});



app.on('will-quit', () => {
  globalShortcut.unregisterAll()
})

var jsonFilePath = null;

ipcMain.on('upload-folder', (event, data) => {
  const newFolderPath = path.join(path.dirname(data.path), 'eagle-flow');
  jsonFilePath = path.join(newFolderPath, 'eagle-flow.json');
  fs.mkdirSync(newFolderPath, { recursive: true });

  const jsonData = [
    {
      folders: {
        AutonFolders: [
          { 
            name: "Blue",
            color: "#3B69E0"
          },
          { 
            name: "Red",
            color: "#CC3541"
          },
        ],
        PathFolders: [
          { name: "Blue" },
          { name: "Red" },
        ],
      }
    }
  ];

  fs.writeFileSync(jsonFilePath, JSON.stringify(jsonData, null, 2));

  event.reply('json-file-path', jsonFilePath);
});

ipcMain.on('upload-old-folder', (event, data) => {
  const newFolderPath = path.join(path.dirname(data.path), 'eagle-flow');
  jsonFilePath = path.join(newFolderPath, 'eagle-flow.json');
  console.log(jsonFilePath);
  event.reply('json-file-path', jsonFilePath);
});

ipcMain.on('read-json-file', (event, filePath) => {
    const jsonData = fs.readFileSync(filePath, 'utf-8');

    const parsedData = JSON.parse(jsonData);

    event.reply('json-file-data', parsedData);
});

ipcMain.on('new-folder', (event, [newData, folderToUpdate]) => {
  console.log("jsonFilePath:", jsonFilePath);

  const data = fs.readFileSync(jsonFilePath);
  const jsonData = JSON.parse(data);

  console.log("Before Adding data", JSON.stringify(jsonData, null, 2));

  jsonData[0].folders[folderToUpdate].push(newData);

  const jsonString = JSON.stringify(jsonData, null, 2);
  fs.writeFileSync(jsonFilePath, jsonString, 'utf-8');

  console.log('Data added to file');

  const updatedData = fs.readFileSync(jsonFilePath);
  const updatedJsonData = JSON.parse(updatedData);

  console.log(JSON.stringify(updatedJsonData, null, 2));
});