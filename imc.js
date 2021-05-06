const nome = document.getElementById('nome');
const altura = document.getElementById('altura'); 
const peso = document.getElementById('peso');
const calcular = document.getElementById('calcular');
const resultado = document.getElementById('resultado');
//pega o elemento(não o conteudo) cujo o id é:

function imc(){
    alert ('teste click');
}

calcular.addEventListener('click', imc);