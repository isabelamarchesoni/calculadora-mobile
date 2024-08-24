//criando variavel para rececer os atributos do elemento com id
//somar
let somar = document.getElementById("somar");

let div = document.getElementById("div");

let sub = document.getElementById("sub");

let mult = document.getElementById("mult");

/*pegando atributos do elemento com id valor1*/
let valor1 = document.getElementById("valor1");

let valor2 = document.getElementById("valor2");

//adiciona o evento de click no elemento com id somar
somar.addEventListener("click", function(){
	let resultado = parseInt(valor1.value) + parseInt(valor2.value);

	document.getElementById("resultado").value = resultado;

    mudarCor(resultado);
    /*alterando valor de tags que não são formulário*/
    docment.getElementById("usoma").value = resultado;
});

/*façam outros botões (subtração, divisão, multiplicação)*/

sub.addEventListener("click", function(){
	let resultado = parseInt(valor1.value) - parseInt(valor2.value);

	document.getElementById("resultado").value = resultado;

    mudarCor(resultado);

    doucment.getElementById("usub").value = resultado;
});

div.addEventListener("click", function () {
    let resultado = parseInt(valor1.value) / parseInt(valor2.value);

    document.getElementById("resultado").value = resultado;

    mudarCor(resultado);

    document.getElementById("udiv").value = resultado;
});

mult.addEventListener("click", function(){
	let resultado = parseInt(valor1.value) * parseInt(valor2.value);

	document.getElementById("resultado").value = resultado;
	//chamando função
    mudarCor(resultado);

    document.getElementById("umulti").value = resultado;
});
/*Exemplo de Criação de função*/
function mudarCor(result){
	if(result < 0){
		document.getElementById("resultado").style.color = "#F00";
	}else{
		document.getElementById("resultado").style.color = "#00F";
	}
}

