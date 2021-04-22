// var token = "&token=5pOZh9f55DjmRwbw4Ma64clIpgBCGYwC"

let input = document.getElementsByTagName('input');

input[12].addEventListener('keyup', () => {
    if (input[12].value.length == '2' || input[12].value.length == '6') {
        input[12].value += '.'
    } else if (input[12].value.length == '10') {
        input[12].value += '/'
    } else if (input[12].value.length == '15') {
        input[12].value += '-'
    }
    input[12].style.color = "rgb(161, 7, 7)"; input[12].style.fontWeight = "bold"
})

input[12].addEventListener('blur', () => {
    // cnpj exemplo     03.840.986/0049-40
    let token = `&token=5pOZh9f55DjmRwbw4Ma64clIpgBCGYwC`
    let inpCnpj = (input[12].value).replace(/\./g, '').replace(/\//g, '').replace(/\-/g, '');

    let opt = {
        method: 'GET',
    }

    fetch(`https://api-publica.speedio.com.br/buscarcnpj?cnpj=${inpCnpj}${token}`, opt)
        .then(resp => resp.json())
        .then(inject => {
            let dadosString = JSON.stringify(inject);
            let dadosTransforme = dadosString.split(" ").join("_");
            let jsonTransformado = JSON.parse(dadosTransforme);
            console.log(jsonTransformado.CEP)

            input[7].value = jsonTransformado.DDD += '-' + jsonTransformado.TELEFONE
            input[11].value = jsonTransformado.EMAIL;
            input[13].value = jsonTransformado.RAZAO_SOCIAL.replace(/\_/g, ' ');
            input[14].value = jsonTransformado.NOME_FANTASIA.replace(/\_/g, ' ');
            input[15].value = jsonTransformado.CEP;
            input[16].value = jsonTransformado.LOGRADOURO;
            input[17].value = jsonTransformado.NUMERO;
            input[18].value = jsonTransformado.BAIRRO.replace(/\_/g, " ")
            input[19].value = jsonTransformado.MUNICIPIO.replace(/\_/g, " ")
            input[20].value = jsonTransformado.UF;

            alert("Atenção no endereço de entrega")

        })
})

let dadosCadastrados = [];
function btCadastrar() {

    for (let i = 0; i < 18; i++) {
        dadosCadastrados.push(input[i].value);
    }
    let inputChave = (input[12].value || input[3].value).replace(/\./g, '').replace(/\//g, '').replace(/\-/g, '');
    JSON.stringify(localStorage.setItem(inputChave, dadosCadastrados));
    setTimeout(() => {
        for (let c = 0; c < 18; c++) {
            input[c].value = ""
        }
    }, 2000);

}

let cep = document.querySelector("#cep");

cep.addEventListener('keyup', (a) => {
    if (cep.value.length == '5') {
        cep.value += "-"
    }


    if (a.key == 'Enter') {
        cepLimpo = (cep.value).replace(/\-/g, '');

        let conexao = {
            method: 'GET',
        }
        fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`, conexao)
            .then(resp => resp.json())
            .then(conex => {

                input[16].value = conex.logradouro
                input[18].value = conex.bairro

            })
    }
})
/*
//16
{cep: "04843-560", logradouro: "Rua Maria Alexandrina de Moraes", complemento: "", bairro: "Parque Grajaú", localidade: "São Paulo", …}
bairro: "Parque Grajaú"
cep: "04843-560"
complemento: ""
ddd: "11"
gia: "1004"
ibge: "3550308"
localidade: "São Paulo"
logradouro: "Rua Maria Alexandrina de Moraes"
siafi: "7107"
uf: "SP"
__proto__: Object
*/
/*
{NOME FANTASIA: "TELHANORTE", RAZAO SOCIAL: "SAINT-GOBAIN DISTRIBUICAO BRASIL LTDA", CNPJ: "03840986004940", STATUS: "ATIVA", CNAE PRINCIPAL DESCRICAO: "Comércio varejista de materiais de construção não especificados anteriormente", …}
    BAIRRO: "VILA CALIFORNIA"
    CEP: "03490000"
CNAE PRINCIPAL CODIGO: "4744005"
CNAE PRINCIPAL DESCRICAO: "Comércio varejista de materiais de construção não especificados anteriormente"
CNPJ: "03840986004940"
COMPLEMENTO: ""
DATA ABERTURA: "17/04/2009"
    DDD: "11"
    EMAIL: "atendimento@telhanorte.com.br"
    LOGRADOURO: "ARICANDUVA"
    MUNICIPIO: "São Paulo"
    NOME FANTASIA: "TELHANORTE"
    NUMERO: "6470"
    RAZAO SOCIAL: "SAINT-GOBAIN DISTRIBUICAO BRASIL LTDA"
STATUS: "ATIVA"
    TELEFONE: "38784999"
TIPO LOGRADOURO: "AVENIDA"
    UF: "SP"
__proto__: Object
*/