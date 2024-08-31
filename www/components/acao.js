/*Criando variavel para receber os atributos do elemento com id*/
/*Somar*/
let somar = document.getElementById("somar");
let subtrair = document.getElementById("subtrair");
let multiplicar = document.getElementById("multiplicar");
let dividir = document.getElementById("dividir");

/*Pegando atributos do elemento com id valor1*/
let valor1 = document.getElementById("valor1")

let valor2 = document.getElementById("valor2")

let cont1 = 0;
let cont2 = 0;
let cont3 = 0;
let cont4 = 0;

//adiciona o evento de click no elemento com id somar 
somar.addEventListener("click", function(){
    let resultado = parseFloat(valor1.value) + parseFloat(valor2.value);
    /*ParseInt se refere a valores inteiros*/
    /*ParseFloat se refere a valores com casas decimais(numeros com virgula)*/

    document.getElementById("resultado").value = resultado;
    
    mudarCor(resultado);   
    /*textContent altera de formulario para numero*/
    document.getElementById("usoma").textContent = resultado;

    /*Usando innerHTML para inserir tags dentro da div somaanterior*/
    document.getElementById("somaanterior").innerHTML += "<p class='itemsoma'>"+resultado+"<p>";

    let itemsoma = document.getElementsByClassName("itemsoma")
    //array vetor
    let somatotal = 0;
    for(let i = 0; i < itemsoma.length; i++){
        somatotal = somatotal+ parseFloat(itemsoma[i].textContent)
    }
    document.getElementById("resultSomaTotal").textContent = somatotal;
});     

subtrair.addEventListener("click", function(){
    let resultado = parseFloat(valor1.value) - parseFloat(valor2.value);

    document.getElementById("resultado").value = resultado;
    
    /*Chamada de Função*/
    mudarCor(resultado);

    document.getElementById("usub").textContent = resultado;

    document.getElementById("subanterior").innerHTML += "<p>"+resultado+"<p>";

    resultSubTotal.innerHTML = ++cont1
}); 

multiplicar.addEventListener("click", function(){
    let resultado = parseFloat(valor1.value) * parseFloat(valor2.value);

    document.getElementById("resultado").value = resultado;

    mudarCor(resultado);

    document.getElementById("umult").textContent = resultado;

    document.getElementById("multanterior").innerHTML += "<p>"+resultado+"<p>";

    resultMultTotal.innerHTML = ++cont2
}); 

dividir.addEventListener("click", function(){   
    let resultado = parseFloat(valor1.value) / parseFloat(valor2.value);

    document.getElementById("resultado").value = resultado;

    mudarCor(resultado);

    document.getElementById("udiv").textContent = resultado;

    document.getElementById("divanterior").innerHTML += "<p>"+resultado+"<p>";

    resultDivTotal.innerHTML = ++cont3
}); 

/*Criação de função em JavaScript*/
function mudarCor(result){

    if(result < 0){
        document.getElementById("resultado").style.color = "#f00";
    }else{
        document.getElementById("resultado").style.color = "#00f";
    }
}
