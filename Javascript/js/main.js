
function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>obrigado por clicar</b>";
    //console.log(document.getElementById("agradecimento"));

}

function redirecionar(){
    window.open("https://digitalinnovation.one/");  //OUTRA JANELA
    //window.location.href = "https://digitalinnovation.one/";  MSM JANELA
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = " obrigado por passar";
    elemento.innerHTML = " obrigado por passar";
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = " Passe o mouse aqui"
    elemento.innerHTML = " passe o mouse por aqui";
}

function load(){
    alert("pagina carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}




















































/*
function soma(n1, n2){
    return n1 + n2;
}

var validar=0; // UTILIZA A VARIAVEL GLOBAL

function validaIdade(idade){
    if(idade>=18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}

var idade= prompt("qual sua idade");
validaIdade(idade)
console.log(validaIdade(idade));
/*


/*
var d = new Date();
alert(d.getMinutes());
alert(d.getHours());
alert(d.getDay());
alert(d);


/*
var count;
for(count=0; count <=5; count++){
    alert(count);
};
*/

/*
var count = 0;
while (count <= 5){
    console.log(count);
    alert(count);
    count ++;  // count = count + 1
};
*/


/*
var idade = prompt("Qual sua idade");
if(idade >= 18){
    alert("maior de idade");
} else{
    alert("menor de idade");
};
*/





// LISTAS \\

/*
var frutas = [{nome:"maça", cor:"verelha"}, {nome:"uva", cor:"roxa"}] // dicionario

console.log(frutas); // mostra todo o dicionario

alert(frutas[1].nome); // alert do dicionario, na posção 1 da lista 
*/


/*
var lista = ["maça","pera","laranja"];
lista.push("uva"); // adiciona um elemento
lista.pop(); // remove ultimo elemento lista
console.log(lista.reverse()); // lista ao contrario, e LENGHT mostra o tamanho
console.log(lista.toString()); // printa aa lista em uma string
console.log(lista.join(" - ")); // adicoina outros elementos na lista
*/


// VARIAVEIS \\

/*
var nome = "Gabriel Laskos";
var idade = 9;
var idade2 = 10

var frase = "Japao eh o melhor time"
alert(nome + " tem " + idade + " anos ");
alert( idade + idade2);

console.log(nome);
console.log(idade);
console.log(frase.replace("Japao", "Brasil"));
console.log(frase.toUpperCase());
*/