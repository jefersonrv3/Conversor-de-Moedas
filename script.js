/* Início do código do Conversor de moedas, fui instruído pelo professor a dividir o 
trabalho em pequenas etapas e ir concluido uma de cada vez para facilitar o entendimento 
 e prevenir qualquer descontrole dos passos a serem seguidos, 
 para que quando algo não funciionar, eu saber onde ir porque o
  que ocorreu antes esta teoricamente correto funcionando e valido..*/

const botaoConverter = document.getElementById('botao-converter');

function converterMoeda() {
    inputValor = document.getElementsByClassName('input-valor')[0].value;
    /* Esse éo jc oletando o valor digitado pelo USER */

    const usdhoje = 5.22; /* Valor fictício atribuído ao DOlar */
    const BrlUsd = inputValor / usdhoje; /* aqui é a operação da divisão direta dos dois valores par exibição depois */

    console.log(BrlUsd); /* exibição do resultado da conta so para teste mesmo  */
}
botaoConverter.addEventListener('click', converterMoeda); /*  o click do botão, onde ele dá o "triigger" pro cálculo acontecer */