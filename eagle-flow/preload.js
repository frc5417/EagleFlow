const { contextBridge, ipcRenderer } = require('electron');


contextBridge.exposeInMainWorld(
  'electron', {
    ipcRenderer: {
      send: (channel, data) => {
        ipcRenderer.send(channel, data);
      },
      on: (channel, listener) => {
        ipcRenderer.on(channel, (event, ...args) => listener(event, ...args));
      },
      removeAllListeners: (channel, data) => {
        ipcRenderer.removeAllListeners(channel, data);
      },
      removeListener: (channel, data) => {
        ipcRenderer.removeListener(channel, data);
      },
      once: (channel, data) => {
        ipcRenderer.once(channel, data);
      }
      }
    }
);
