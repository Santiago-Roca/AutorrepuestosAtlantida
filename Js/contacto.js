let enviar = document.getElementById("form-contacto")
let nombre = document.getElementById("input-nombre")
enviar.addEventListener("click", (e) => {
    e.preventDefault()

    if (nombre.value != "") {
        // alert("Hola")
        Swal.fire({
            title: 'Error!',
            text: 'Do you want to continue',
            icon: 'error',
            confirmButtonText: 'Cool'
        })
    }else{
        // nombre.value = "Ingrese algo"
        nombre.placeholder = "Debes Ingresar tu nombre!"
    }
})
