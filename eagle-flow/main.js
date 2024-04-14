const { app, BrowserWindow, ipcMain } = require('electron/main');
const path = require('path');
const fs = require('fs');

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
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

ipcMain.on('upload-folder', (event, data) => {
  const newFolderPath = path.join(path.dirname(data.path), 'EagleFlow');
  const jsonFilePath = path.join(newFolderPath, 'eagle-flow.json');
  fs.mkdirSync(newFolderPath, { recursive: true });

  const jsonData = [
    { id: 0, name: "Blue" },
    { id: 1, name: "Red" }
  ];

  fs.writeFileSync(jsonFilePath, JSON.stringify(jsonData, null, 2));

  event.reply('json-file-path', jsonFilePath);
});

ipcMain.on('upload-old-folder', (event, data) => {
  const newFolderPath = path.join(path.dirname(data.path), 'EagleFlow');
  const jsonFilePath = path.join(newFolderPath, 'eagle-flow.json');

  event.reply('json-file-path', jsonFilePath);
});

ipcMain.on('read-json-file', (event, filePath) => {
  try {
    const jsonData = fs.readFileSync(filePath, 'utf-8');

    const parsedData = JSON.parse(jsonData);

    event.reply('json-file-data', parsedData);
  } catch (error) {
    event.reply('json-file-error', { message: 'Error reading JSON file', error });
  }
});