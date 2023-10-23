
//Tipos de Variaveis://

let nome = "Nome Variavel let\n";

var nome1 = "Nome Variavel var\n";

const nome2 = "Nome Variavel const\n";

var msg = nome + nome1  + nome2;

document.getElementById("mensagem").innerHTML = msg;

alert(msg);

//Tipos de Dados://

var texto = "Hello Word!!";
var num = 100;
let list = [1, 2, 3];
let obj = {chave:"Valor"};

document.getElementById("texto").innerHTML = texto;
document.getElementById("num").innerHTML = num;
document.getElementById("list").innerHTML = list;
document.getElementById("obj").innerHTML = obj;

//Operadores://

var res = 5 + 5;

document.getElementById("res").innerHTML = res;

var comparadores = 5 ==="5";

document.getElementById("comparadores").innerHTML = comparadores;

var idade = 22;
var cond  = (idade>18&&nome!=="Admin");

document.getElementById("cond").innerHTML = cond;

//Estruturas de Controle://

if (idade>=18){
    console.log("Você e maior de idade.");
}else {
    console.log("Você é menor de idade.");
}
for(let i=0;i<5;i++){
    console.log(i);
}

//Funções://

function saudacao(nome){
    return"olá, "+nome+"!";
}
let apresentacao = saudacao("Ana");
console.log(apresentacao);

//Eventos://

document.getElementById("botao").addEventListener("click",function(){
    alert("Botão Clicado!");
});

//Objetos e Objetos Globais://

window.alert("Isso e um alerta!");