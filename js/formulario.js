let miFormulario = document.getElementById("formulario");
/*parte de java script que valida los datos ingresasdo por la pc y
que el usuario debe ingresar para vaidar su datos, al no hacerlo sale un cartel
pidiendo gentilmente al usuario que ingrese sus datos*/

function validarFormulario(dato) {

	dato.preventDefault();

	let nombre = document.getElementById("nombre").value;
	let apellido = document.getElementById("apellido").value;

	//validar la informaciòn cargada del formulario
	if (document.getElementById("nombre").value == "") {
		alert("complete su nombre completo para continuar");
		return false;
	}
	if (document.getElementById("apellido").value == "") {
		alert("complete su apellido");
		return false;
	}
	if (document.getElementById("direccion").value == "") {
		alert("complete su direccion");
		return false;
	}
	if (document.getElementById("ciudad").value == "") {
		alert("complete su ciudad");
		return false;
	}
	if (document.getElementById("dni").value == "") {
		alert("complete su dni");
		return false;
	}
	if (document.getElementById("mail").value == "") {
		alert("complete su mail");
		return false;
	}
	if (document.getElementById("telefono").value == "") {
		alert("complete su numero de telefono");
		return false;
	}
	/*con el localstorage lo que hacemos es guardar los datos ingresados en el navegador ya que al
	cerrarse la pestania se pierde la informacion ingresada en cambio con el comando del
	local se guarda en un cooki y me ayuda a no tener que volver a ingresar datos*/
	localStorage.setItem('nombre', nombre);
	/*en este apartado sale el cartel avisado que faltan datos*/
  	alert("Gracias por registrarse sr/sra" +" "+ nombre +" "+ apellido +" "+ dni.value);
  	formulario.submit()
}
/*gracias a esta parte del apartado se sube el formulario*/
miFormulario.addEventListener("submit", validarFormulario);
