let senhaAdm = document.querySelector('#senhaAdm');
let admBanco = document.querySelector('.adm-banco');
let dadosRecebido = document.querySelector('.dadosRecebido');

let chaveCompleta, divAcessoCompleto;

senhaAdm.addEventListener('keyup', (x) => {
    if (x.key == 'Enter') {
        if (senhaAdm.value == '123') {
            admBanco.style.display = "block";
            let center = document.getElementsByTagName('center');
            center[0].style.display = "none"   // oculta a tage center  

            let input = document.createElement('input'); // criando elemento input
            input.setAttribute('type', 'text'); input.setAttribute('id', 'minhaChave');
            dadosRecebido.appendChild(input);
            input.style="margin-left:100px"

            let div = document.createElement('div'); // criando elemento div
            div.setAttribute('class', 'divAcesso');
            dadosRecebido.appendChild(div);

            let minhaChave = document.querySelector('#minhaChave');
            let divAcesso = document.querySelector('.divAcesso');
            chaveCompleta = minhaChave;
            divAcessoCompleto = divAcesso;


        }
    }
})

dadosRecebido.addEventListener('keydown', (b) => {
    if (b.key == 'Enter') {
        let transformarChave = localStorage.getItem(chaveCompleta.value);
        let transf = [transformarChave.split(" ").join("_")]
        let objJsonTransf = { transf };
        divAcessoCompleto.innerText = JSON.stringify(objJsonTransf.transf[0]).replace(/\\/g, ' ').replace(/\"/g, ' ')
        .replace(/\{/g, ' ').replace(/\}/g, ' ').replace(/\[/g, ' ')
        .replace(/\]/g, ' ').replace(/\_/g, ' ').replace(/\,/g, '\n');
        divAcessoCompleto.style = "font-size:20pt;color:#FF1493;margin-left:400px"

    }
})


function limparGeralBanco(){
    localStorage.clear()
}
window.addEventListener('load', () => {
    numeroPedido.value = numeroPedido.value + localStorage.getItem('0')

})
