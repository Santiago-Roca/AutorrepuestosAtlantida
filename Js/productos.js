let listaProductos = []
let listaStorage = JSON.parse(localStorage.getItem("listaProductos"))
const listaCategoria = ['Frenos', 'Neumáticos', 'Baterias', 'Limpieza']

//Cargar Lista productos desde LS
if (listaStorage != null) {
    listaProductos = listaStorage.splice(0, listaStorage.length)
    actualizarLista(listaProductos)
}


//Clase Producto
class Producto {
    constructor(id, descripcion, marca, categoria, precio) {
        this.id = id;
        this.descripcion = descripcion;
        this.marca = marca;
        this.categoria = categoria;
        this.precio = precio;
    }
}

//Mostrar Categorías
listaCategoria.forEach((item) => {
    let option = document.createElement("option")
    option.innerText = item
    let ubicacionCategoria = document.getElementById("categoria")
    ubicacionCategoria.appendChild(option)
})


//Agregar Producto
let formulario = document.getElementById("form")
formulario.addEventListener("submit", agregarProductoLista)

function agregarProductoLista(evento) {
    evento.preventDefault()
    let id = document.getElementById("inputID").value
    let descripcion = document.getElementById("inputDescripcion").value
    let marca = document.getElementById("inputMarca").value
    let categoria = document.getElementById("categoria").value
    let precio = document.getElementById("inputPrecio").value

    formulario.onmouseenter = () => {
        document.getElementById("estado").value = ("")
    }

    //Validación de número
    if (validarNumero(precio) && validarNumero(id) && valorUnico(listaProductos, id)) {
        let producto = new Producto(parseInt(id), descripcion, marca, categoria, parseInt(precio))
        listaProductos.push(producto)
        localStorage.setItem("listaProductos", JSON.stringify(listaProductos))

        document.getElementById("estado").style.color = '#006600'
        document.getElementById("estado").value = ("PRODUCTO INGRESADO")


        let posicion = listaProductos.indexOf(producto)

        let fila = document.createElement("tr")
        let tabla = document.getElementById("tabla")

        let td = document.createElement("td")
        td.innerText = producto.id
        fila.append(td)

        td = document.createElement("td")
        td.innerText = producto.descripcion
        fila.append(td)

        td = document.createElement("td")
        td.innerText = producto.marca
        fila.append(td)

        td = document.createElement("td")
        td.innerText = producto.categoria
        fila.append(td)

        td = document.createElement("td")
        td.innerText = producto.precio
        fila.append(td)

        let botonEliminar = document.createElement("button")
        botonEliminar.innerText = "eliminar"
        botonEliminar.className = "btn btn-danger"

        botonEliminar.onclick = () => {
            listaProductos.splice(posicion, 1)
            localStorage.setItem("listaProductos", JSON.stringify(listaProductos))
            actualizarLista(listaProductos)
        }

        td = document.createElement("td")
        td.append(botonEliminar)
        fila.append(td)

        tabla.append(fila)
        formulario.reset()

    }
}

//Actualizar Lista
function actualizarLista(lista) {
    document.getElementById("tabla").innerText = ""

    lista.forEach((producto) => {
        let pos = lista.indexOf(producto)
        let tabla = document.getElementById("tabla")
        let fila = document.createElement("tr")

        let td = document.createElement("td")
        td.innerText = producto.id
        fila.append(td)

        td = document.createElement("td")
        td.innerText = producto.descripcion
        fila.append(td)

        td = document.createElement("td")
        td.innerText = producto.marca
        fila.append(td)

        td = document.createElement("td")
        td.innerText = producto.categoria
        fila.append(td)

        td = document.createElement("td")
        td.innerText = producto.precio
        fila.append(td)

        let botonEliminar = document.createElement("button")
        botonEliminar.innerText = "eliminar"
        botonEliminar.className = "btn btn-danger"

        botonEliminar.onclick = () => {
            lista.splice(pos, 1)
            localStorage.setItem("listaProductos", JSON.stringify(lista))
            actualizarLista(lista)
        }

        td = document.createElement("td")
        td.append(botonEliminar)
        fila.append(td)

        tabla.append(fila)
    })
}

// Validar Ingreso de Número
function validarNumero(valor) {
    let validar = isNaN(valor)
    if (validar) {
        document.getElementById("estado").style.color = 'rgb(102, 4, 4)'
        document.getElementById("estado").value = ("Debes ingresar un número," + ' " ' + valor + ' " ' + "no es un valor correcto!")
        return false;
    } else {
        return true;
    }
}

//Validar ID Único
function valorUnico(lista, numero) {
    let unico = true;
    if (lista.length >= 1) {
        lista.forEach(item => {
            if (item.id == numero) {
                unico = false;
                document.getElementById("estado").style.color = 'rgb(102, 4, 4)'
                document.getElementById("estado").value = ("El ID " + numero + " ya se encuentra en uso, debe usar un valor diferente!")
            }
        })
    }
    return unico;
}

//Ordenar por precio
let botonPrecio = document.getElementById("btn-precio")
botonPrecio.addEventListener("click", ordenarPorPrecio)

function ordenarPorPrecio(evento) {
    evento.preventDefault()
    listaProductos.sort((a, b) => {
        if (parseInt(a.precio) > parseInt(b.precio)) {
            return 1;
        } else if (parseInt(a.precio) < parseInt(b.precio)) {
            return -1;
        } else {
            return 0;
        }
    })
    actualizarLista(listaProductos)
}


//Ordenar por Categoría
let botonCategoria = document.getElementById("btn-categoria")
botonCategoria.addEventListener("click", ordenarPorCat)

function ordenarPorCat(evento) {
    evento.preventDefault()
    listaProductos.sort((a, b) => {
        if (a.categoria > b.categoria) {
            return 1;
        } else if (a.categoria < b.categoria) {
            return -1;
        } else {
            return 0;
        }
    })
    actualizarLista(listaProductos)
}

//Vaciar Lista
let botonVaciar = document.getElementById("btn-vaciarCarrito")
botonVaciar.addEventListener("click", vaciarLista)

function vaciarLista(e) {
    e.preventDefault()
    listaProductos.splice(0, listaProductos.length)
    localStorage.setItem("listaProductos", JSON.stringify(listaProductos))
    actualizarLista(listaProductos)

}



