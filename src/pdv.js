let produtoPesquisa = document.querySelector('#produtoPesquisa');
let produtoSelecionado = document.querySelector('#produtoSelecionado');
let valorProduto = document.querySelector('#valorProduto');
let quantidade = document.querySelector('#quantidade');
let totalDaCompra = document.querySelector('#totalDaCompra');

let lista = document.querySelector('.lista');

function salvarVenda() {
    let dadosInternoDoBanco = JSON.parse(localStorage.getItem(produtoPesquisa.value));
    produtoSelecionado.value = dadosInternoDoBanco[0].PRODUTO;
    valorProduto.value = dadosInternoDoBanco[0].VALOR_REVENDA;
}


function salvarCarrinho() {

    if (produtoSelecionado.value == "" || quantidade.value == "") {
        open(`../docInformativo/INF.TXT`, '_blank', 'width=300,height=200,top=100');
    } else {

        let totaDaCompra = parseFloat(totalDaCompra.value);
        let qunatidadeProduto = parseFloat(quantidade.value);
        let valorDoProduto = parseFloat(valorProduto.value);

        let calculoTot = qunatidadeProduto * valorDoProduto
        let incremento = (totaDaCompra = totaDaCompra)
        let total = incremento + calculoTot

        totalDaCompra.value = total.toFixed(2);

        lista.innerHTML += `<br>Produto: ${produtoSelecionado.value} Cod: ${produtoPesquisa.value}<br>Valor Unit: ${valorProduto.value}<br>Quant: ${quantidade.value}&nbsp;&nbsp;&nbsp;&nbsp; R$ ${calculoTot.toFixed(2)}<hr>`
        lista.style = "color:grey";

        // limpando 
        valorProduto.value = ""; quantidade.value = ""; produtoSelecionado.value = ""; produtoPesquisa.value = "";
    }

}

/*  campo pesquisa

*/

let listarProduto = document.querySelector('#listarProduto');
for (let i = 1; i < 5; i++) {
    let valorStorage = JSON.parse(localStorage.getItem(i));
    
    let option = document.createElement('option');
    option.setAttribute('value', `${valorStorage[0].PRODUTO}`);
    listarProduto.appendChild(option);

}






/*
{PRODUTO: "blusa vladimir", REFERENCIA: "swq", QUANTIDADE: "2", valor_compra: "50.00", valor_revenda: "100.00", …}
Lucro_sobre_itens: "50.00"
Lucro_total: "200.00"
PRODUTO: "blusa vladimir"
QUANTIDADE: "2"
REFERENCIA: "swq"
Total_gasto: "100.00"
valor_compra: "50.00"
valor_revenda: "100.00"
__proto__: Object
*/