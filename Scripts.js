var botao = document.getElementById("botao");
botao.addEventListener("click", alertar);
var nome = document.getElementById("nome");
var saida = document.getElementById("saida-de-dados");
var email = document.getElementById("email");
var tel = document.getElementById("tel");
var Cep = document.getElementById("Cep");
var logradouro = document.getElementById("logradouro");
var núm = document.getElementById("núm");
var complemento = document.getElementById("complemento");
var bairro = document.getElementById("bairro");
var cidade = document.getElementById("cidade");
var estado = document.getElementById("estado");

function alertar(event){
    //alert("Você clicou no botão!!!!" + event);
    saida.innerText = "Nome: " + nome.value +
    "\n Email: " + email.value +
    "\n Telefone:" + tel.value +
    "\n CEP:" + Cep.value +
    "\n logradouro:" + logradouro.value +
    "\n Número:" + núm.value +
    "\n Complemento:" + complemento.value +
    "\n Bairro:" + bairro.value +
    "\n Cidade:" + cidade.value +
    "\n Estado:" + estado.value;
}
