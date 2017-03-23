/*
	1. Hacer que las teclas guarden su valor
	2. que la tecla = haga una función de hacer la operación
	3. establecer qué operación hace cada signo
	4. imprimir en el input el resultado de la operación
	5. Que la calculadora acepte sólo los carácteres marcados.
*/


function mostrarNumero (num){
    var guardarNumero = document.formulario.resultado.value;
    document.formulario.resultado.value = guardarNumero + num;
}

function mostrarTecla () {
	
}

function signoIgual (valor) {
	var teclaPresionada = document.getElementById("textoPantalla");
	teclaPresionada.value = eval(teclaPresionada.value);
}