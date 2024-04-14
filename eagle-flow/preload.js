const { contextBridge, ipcRenderer } = require('electron');

// Expose a sanitized subset of the Electron APIs to the renderer process
contextBridge.exposeInMainWorld(
  'electron', {
    ipcRenderer: {
      send: (channel, data) => {
        ipcRenderer.send(channel, data);
      },
      on: (channel, data) => {
        ipcRenderer.on(channel, data);
      },
    }
  }
);
