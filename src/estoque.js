let produto = document.querySelector("#produto");
let referencia = document.querySelector("#referencia");
let quantidade = document.querySelector("#quantidade");
let valorUnitario = document.querySelector("#valorUnitario");
let valorRevenda = document.querySelector("#valorRevenda");
let numeroPedido = document.querySelector('#numeroPedido');

let input = document.getElementsByTagName('input');

var cadastroDeProdutos = [];   // array que vai receber os valor do objeto quando o evento onclick for executado

// evento oncliclk
function cadastrarProduto() {
    let produtoEstoque = (produto.value);
    let referenciaEstoque = (referencia.value);
    let quantidadeEstoque = parseInt(quantidade.value);
    let valorUnitarioEstoque = parseFloat(valorUnitario.value);
    let valorRevendaEstoque = parseFloat(valorRevenda.value);

    var pedidoNumero = Number(numeroPedido.value);

    if (input[0].value == "" || input[1].value == "" || input[2].value == "" || input[3].value == "" || input[4].value == "") {
        open(`../docInformativo/INF.TXT`, '_blank', 'width=500,height=120,top=140').close()

    } else {
        let lucroSobreProduto = quantidadeEstoque * valorUnitarioEstoque;
        let lucroUnitarioSobreProduto = valorRevendaEstoque - valorUnitarioEstoque;
        let lucroTotalDosProdutos = lucroUnitarioSobreProduto * quantidadeEstoque;

        let lucroTotal = lucroTotalDosProdutos * quantidadeEstoque;
        //COLOCANDO NUMERO INCREMENTO NO BANCO
        let calc = parseInt(pedidoNumero = pedidoNumero) + 1
        numeroPedido.value = calc

        localStorage.setItem('0', calc);

       let dadosCadstro = {
            PRODUTO: `${calc}:${produtoEstoque}`,
            REFERENCIA: `${referenciaEstoque}`,
            QUANTIDADE: `${quantidadeEstoque}`,
            VALOR_COMPRA: `${valorUnitarioEstoque.toFixed(2)}`,
            VALOR_REVENDA: `${valorRevendaEstoque.toFixed(2)}`,
            TOTAL_GASTO: `${lucroSobreProduto.toFixed(2)}`,
            LUCRO_SB_ITENS: `${lucroUnitarioSobreProduto.toFixed(2)}`,
            LUCRO_TOTAL: `${lucroTotal.toFixed(2)}`,
        }

        let dadosObject = dadosCadstro;
        cadastroDeProdutos.push(dadosObject);
        // COLOCANDO PRODUTOS NO BANCO COM A CHAVE  =>  CALC        
        localStorage.setItem(calc, JSON.stringify(cadastroDeProdutos));
        // limpa os campos input comecando do indice 1
        for (let i = 1; i < 6; i++) {
            input[i].value = ""
        }

    }
}















// verifica se tem a chave '0'  no storage, se não cria uma 
window.addEventListener('load', () => {
    if (localStorage.getItem('0')) {
        numeroPedido.value = numeroPedido.value + localStorage.getItem('0')
    } else {
        let calc = parseInt(pedidoNumero = pedidoNumero);
        numeroPedido.value = calc;
        localStorage.setItem('0', calc);
    }

})



















//console.log(produtoEstoque,referenciaEstoque,quantidadeEstoque,valorUnitarioEstoque,valorRevendaEstoque)