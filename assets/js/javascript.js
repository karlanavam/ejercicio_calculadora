/*
	Pseudocódigo:
	1. Hacer que las teclas guarden su valor
		-Guardar el valor de la pantalla
	2. que la tecla = haga una función de hacer la operación
	3. establecer qué operación hace cada signo
		-encontré la funcion eval().
	4. imprimir en el input el resultado de la operación
	5. Que la calculadora acepte sólo los carácteres marcados.
	6. El boton = y enter, tengan la misma función.
*/


function mostrarNumero (num){
    var guardarNumero = document.formulario.resultado.value; 
    document.formulario.resultado.value = guardarNumero + num; 
};

function signoIgual (valor) {
	var teclaPresionada = document.getElementById("textoPantalla");
	teclaPresionada.value = eval(teclaPresionada.value);
};

function validarNumero (event) {
	var ascii = event.keyCode	;

	if (ascii == 13 ) {
		signoIgual();
		return false;
	} 
	if (ascii < 42 || ascii > 57 ) {
		return false;
	} ;
}

function eliminar(){ 
 	var anterior = document.formulario.contenedor.value;
 	var nuevoValor = anterior.substring(0,anterior.length-1);
 	document.getElementById("contenedor").value = nuevoValor;
}
