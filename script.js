/* Início do código do Conversor de moedas, fui instruído pelo professor a dividir o 
trabalho em pequenas etapas e ir concluido uma de cada vez para facilitar o entendimento 
 e prevenir qualquer descontrole dos passos a serem seguidos, 
 para que quando algo não funciionar, eu saber onde ir porque o
  que ocorreu antes esta teoricamente correto funcionando e valido..*/
// URL da API pedindo as 5 moedas que você precisa
// URL da API pedindo as 5 moedas que você precisa
const url = "https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,GBP-BRL,JPY-BRL,BTC-BRL";
let dolarhj, eurohj, librahj, ienehj, bitcoinhj;
// Busca os dados
fetch(url)
    .then(function (resposta) {
        return resposta.json(); // transforma a resposta em objeto JScript
    })
    .then(function (dados) {
        console.log(dados); // aqui  já da p ver tudo que a API retornou

        // Pegando o valor de cada moeda (o campo "bid" é a cotação atual)
        dolarhj = dados.USDBRL.bid;
        eurohj = dados.EURBRL.bid;
        librahj = dados.GBPBRL.bid;
        ienehj = dados.JPYBRL.bid;
        bitcoinhj = dados.BTCBRL.bid;

        console.log("Dólar: " + dolarhj);
        console.log("Euro: " + eurohj);
        console.log("Libra: " + librahj);
        console.log("Iene: " + ienehj);
        console.log("Bitcoin: " + bitcoinhj);
    })
    .catch(function (erro) {
        console.log("Deu ruim aquió: " + erro);
    });

const botaoConverter = document.getElementById('botao-converter');

function converterMoeda() {
    const inputValor = document.getElementsByClassName('input-valor')[0].value;
    /* Esse éo js coletando o valor digitado pelo USER */

    const realToDolar = inputValor / dolarhj; /* aqui é a operação da divisão direta dos dois valores par exibição depois */
    const ValorMoedaOrigem = document.querySelector(".ValorMoedaOrigem")
    const ValorMoedaConvertida = document.querySelector(".ValorMoedaConvertida")

    console.log(realToDolar); /* exibição do resultado da conta so para teste mesmo  */
    ValorMoedaOrigem.innerHTML = inputValor;
    ValorMoedaConvertida.innerHTML = realToDolar;
}
botaoConverter.addEventListener('click', converterMoeda); /*  o click do botão, onde ele dá o "triigger" pro cálculo acontecer */