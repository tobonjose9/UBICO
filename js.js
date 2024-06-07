
console.log('JavaScript está conectado');

const inputs = document.querySelectorAll('.input');


function focusFunc(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function blurFunc(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", focusFunc);
	input.addEventListener("blur", blurFunc);
});


// Obtener el campo de entrada de teléfono
var telefonoInput = document.getElementById('telefono');

// Agregar un listener para el evento de entrada
telefonoInput.addEventListener('input', function(event) {
    // Obtener el valor actual del campo de entrada
    var valor = event.target.value;

    // Reemplazar cualquier caracter que no sea un número con una cadena vacía
    var valorNumerico = valor.replace(/\D/g, '');

    // Actualizar el valor del campo de entrada con el valor numérico
    event.target.value = valorNumerico;
});
