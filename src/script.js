let frame = document.getElementsByTagName('iframe');

// botoes comados principais do sistema de gestao

function help() {
    open('./docInformativo/READM.TXT', '_self', 'width=700,height=320,top=100')
}
function menuPrincipal() {
    frame[0].src = "https://www.bing.com/?cc=br";
   
}

function cliente() {
    frame[0].src = "./view/cliente.html"
    frame[0].style.background="rgb(19, 19, 19)"
    document.body.style.background="rgb(19, 19, 19);"
   
}

function estoque(){
    frame[0].src="./view/estoque.html";
    document.body.style.background="rgb(19, 19, 19);"
}

function pdv(){
    frame[0].src="./view/pdv.html"
    document.body.style.background="rgb(19, 19, 19);"
}
function caixa(){
    frame[0].src="./view/caixa.html"
    frame[0].style.background="rgb(19, 19, 19);"
    document.body.style.background="rgb(19, 19, 19);"
}
function bancoDados(){

    frame[0].src="./view/bancoDados.html"
   
}

//relogio
setInterval(() => {
    let relogio = document.querySelector('.relogio');
    let time = new Date;
    let h = time.getHours();
    let m = time.getMinutes();
    let s = time.getSeconds();
    if (h < 10) {
        h = '0' + h
    }
    if (m < 10) {
        m = '0' + m
    }
    if (s < 10) {
        s = '0' + s
    }

    relogio.innerHTML = `${h}:${m}:${s}`;

}, 1000);
//botoes fechar tela e atualizar

function desligar() {
    close()
}
function atualizar() {
    window.location.reload()
   open(`./docInformativo/INFO.TXT`, '_self', 'width=290,height=140,top=100')
}
window.addEventListener('load', () => {
    
})
