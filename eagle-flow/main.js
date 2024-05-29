const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const fs = require('fs');
const storage = require('electron-json-storage');

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true,
      contextIsolation: true,
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

ipcMain.on('get-stored-path', (event) => {
  storage.get('path', (error, data) => {
    if (error) {
      console.error('Error fetching stored path:', error);
      event.reply('stored-path', null);
    } else {
      jsonFilePath = data.path || null;
      event.reply('stored-path', jsonFilePath);
    }
  });
});

ipcMain.on('upload-folder', (event, data) => {
  const newFolderPath = path.join(path.dirname(data.path), 'eagle-flow');
  jsonFilePath = path.join(newFolderPath, 'eagle-flow.json');
  
  storage.set('path', { path: jsonFilePath }, (error) => {
    if (error) {
      console.error('Error storing path:', error);
      return;
    }
    console.log('Data stored successfully!');
  });
  
  fs.mkdirSync(newFolderPath, { recursive: true });

  const jsonData = [
    {
      folders: {
        AutonFolders: [
          { name: "Blue", color: "#3B69E0" },
          { name: "Red", color: "#CC3541" },
        ],
        PathFolders: [
          { name: "Blue" },
          { name: "Red" },
        ],
        NamedCommands: [{}],
      },
    },
  ];

  fs.writeFileSync(jsonFilePath, JSON.stringify(jsonData, null, 2));
  event.reply('json-file-path', jsonFilePath);
});

ipcMain.on('upload-old-folder', (event, data) => {
  const newFolderPath = path.join(path.dirname(data.path), 'eagle-flow');
  jsonFilePath = path.join(newFolderPath, 'eagle-flow.json');
  
  storage.set('path', { path: jsonFilePath }, (error) => {
    if (error) {
      console.error('Error storing path:', error);
      return;
    }
    console.log('Data stored successfully!');
  });
  
  console.log(jsonFilePath);
  event.reply('json-file-path', jsonFilePath);
});

ipcMain.on('read-json-file', (event, filePath) => {
  if (filePath) {
    const jsonData = fs.readFileSync(filePath, 'utf-8');
    const parsedData = JSON.parse(jsonData);
    event.reply('json-file-data', parsedData);
  } else {
    console.error('Error: filePath is null');
  }
});

ipcMain.on('new-folder', (event, [newData, folderToUpdate]) => {
  console.log("jsonFilePath:", jsonFilePath);

  if (jsonFilePath) {
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
  } else {
    console.error('Error: jsonFilePath is null');
  }
});

ipcMain.on('new-project', (event, project) => {
  storage.set('path', { path: null }, (error) => {
    if (error) {
      console.error('Error resetting path:', error);
      return;
    }
    console.log('Data reset');
  });
});
