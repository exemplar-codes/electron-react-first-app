// loads HTML to window
const { app, BrowserWindow } = require("electron");

function createWindow() {
  const win = new BrowserWindow({
    width: 1024,
    height: 768,
    backgroundColor: "white",
    webPreferences: { nodeIntegration: false, contextIsolation: true },
  });

  win.loadFile("../build/index.html");
}

app.whenReady().then(createWindow);
