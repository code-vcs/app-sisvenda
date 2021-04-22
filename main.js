const { app, BrowserWindow } = require('electron');

// reload ajuda no desenvolvimento do projeto   sem o reload é nescerario reiniciar o sistema toda hora
require('electron-reload')(__dirname, {
    require: (`${__dirname}/node_modules/electron`)
})

function createServer() {
    let wind = new BrowserWindow({
        icon: "./img/ico.png",
        width: 700,
        height: 560,
       // frame: null,
       // resizable: false,
        thickFrame:true,
    });
    wind.loadFile('./view/login.html');    //  caminho principal     ./view/telaLogin.html
}
app.whenReady().then(createServer);