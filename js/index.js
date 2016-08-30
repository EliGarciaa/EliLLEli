function seguridad() {
	var usua = document.getElementById("usuario").value;
	var contra = document.getElementById("contraseña").value;

	if (usua == "Eliseo" && contra == "eli123") {
		alert("Bienvenido");
	}
		else if (usua == "" && contra == ""){
			alert("Ingresa Datos");
	}

		else 
			alert("No estas autorizado para entrar al Sistema");
}	