let carrito = []
let listaStorage = JSON.parse(localStorage.getItem("carrito"))

//Cargar Lista productos desde LS
if (listaStorage != null) {
    carrito = listaStorage.splice(0, listaStorage.length)
    actualizarCarrito()
}

//Clase Producto
class Producto {
    constructor(id, titulo, categoria, precio, imagen, cantidad) {
        this.id = id;
        this.titulo = titulo;
        this.categoria = categoria;
        this.precio = precio;
        this.imagen = imagen;
        this.cantidad = cantidad;
    }
}


//Agregar Producto al carrito
const seccionProductos = document.getElementById("lista-productos")
seccionProductos?.addEventListener("click", agregarProductoCarrito)

function agregarProductoCarrito(evento) {
    if (evento.target.classList.contains("card-producto")) {
        evento.preventDefault()
        let card = evento.target.parentElement.parentElement

        let titulo = card.querySelector('.card-title').innerText
        let precio = card.querySelector('.card-price').innerText.substring(1)
        let categoria = card.querySelector('.card-category').innerText
        let imagen = card.querySelector('.card-img').src
        let id = card.id
        let cantidad = 1

        const existe = carrito.find(producto => producto.id == id);
        let posicion;
        if (existe != undefined) {
            posicion = carrito.indexOf(existe)
            carrito[posicion].cantidad += 1
            carrito[posicion].precio = (precio * carrito[posicion].cantidad)
        } else {
            let producto = new Producto(id, titulo, categoria, precio, imagen, cantidad)
            carrito.push(producto)
        }

        //Función Toastify
        Toastify({
            text: "Producto agregado",
            duration: 1000,
            destination: "/ProyectoJava/paginas/carrito.html",
            newWindow: false,
            close: true,
            gravity: "top",
            position: "right",
            stopOnFocus: true,
            style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
            onClick: function () {
            }
        }).showToast();

        actualizarCarrito()
    }
}

// Actualizar carrito
function actualizarCarrito() {
    let listado = document.getElementById("lista-carrito")
    let itemsCarrito = document.getElementById("lista-productos-carrito")

    listado.innerText = ''

    if (itemsCarrito != null) {
        itemsCarrito.innerText = ''
    }

    let total = 0
    let logoCarrito = document.getElementById("logo-carrito")

    if (carrito.length > 0) {
        carrito.forEach((producto) => {
            const filaPaginaCarrito = document.createElement('div')
            filaPaginaCarrito.className = "row fila-pagina-carrito g-0 my-3 py-3"
            const fila = document.createElement('div')
            fila.className = "col-10 mx-auto"
            fila.innerHTML =
                `<div class="py-2 text-center">
                <h4 class="mb-3">${producto.titulo} </h4>
                <div class="box-imgCarrito">
                        <img src="${producto.imagen}" class="carrito-img px-2" alt="img-carrito">
                </div>
                <p class="mb-0">$${producto.precio}</p>
                <p>Cantidad: ${producto.cantidad} </p>
            </div>`
            listado.append(fila)
            total = total + parseInt(producto.precio)

            //Boton Eliminar
            let posicion = carrito.indexOf(producto)

            let botonEliminar = document.createElement("button")
            botonEliminar.innerText = "X"
            botonEliminar.className = "col-md-1 btn btn-eliminar"

            botonEliminar.onclick = () => {
                carrito.splice(posicion, 1)
                localStorage.setItem("carrito", JSON.stringify(carrito))
                actualizarCarrito()
            }

            //Agrego los productos a la pagina del carrito
            filaPaginaCarrito.innerHTML = `
            <div class="col-md-2">
                <img src="${producto.imagen}" class="carrito-img" alt="img-carrito">
            </div>
            <h4 class="col-md-3 mb-0">${producto.titulo}</h4>
            <h5 class="col-md-2 mb-0">${producto.categoria}</h5>
            <p class="col-md-1 text-center mb-0">$${producto.precio}</p>
            <p class="col-md-1 text-center mb-0">Cantidad: ${producto.cantidad}</p>`
            if (itemsCarrito != null) {
                filaPaginaCarrito.append(botonEliminar)
                itemsCarrito.append(filaPaginaCarrito)
            }

        })
        let precioTotal = document.createElement('div')
        precioTotal.className = "row m-3 pt-3"
        precioTotal.innerHTML = `<h4 class="col-md-12">Precio Total: $${total}</h4>`
        if (itemsCarrito != null) {
            itemsCarrito.append(precioTotal)
        }

        const filaSegunda = document.createElement('div')
        filaSegunda.innerHTML =
            `<h6 id="precio-total" class="text-center precio-total">Precio Total: $${total}</h6>
            <a class="btn" href="/ProyectoJava/paginas/carrito.html">Ir al carrito</a>`
        listado.append(filaSegunda)

        localStorage.setItem("carrito", JSON.stringify(carrito))

        //Cambiar logo del carrito
        logoCarrito.src = "/ProyectoJava/Imagenes/carrito4.png"
        animarLogo()

    } else {
        logoCarrito.src = "/ProyectoJava/Imagenes/carrito2.png"
    }
}


//Función Redireccionar página
function redireccionar() {
    window.location = "../index.html"
}

//Vaciar Lista
let botonVaciar = document.getElementById("btn-vaciarCarrito")
botonVaciar?.addEventListener("click", vaciarCarrito)

function vaciarCarrito() {
    carrito.splice(0, carrito.length)
    localStorage.setItem("carrito", JSON.stringify(carrito))
    actualizarCarrito()
    setTimeout(redireccionar, 1500)
}

//Ordenar por precio
let botonPrecio = document.getElementById("btn-precio")
botonPrecio?.addEventListener("click", () => {
    carrito.sort((a, b) => {
        if (parseInt(a.precio) > parseInt(b.precio)) {
            return 1;
        } else if (parseInt(a.precio) < parseInt(b.precio)) {
            return -1;
        } else {
            return 0;
        }
    })
    actualizarCarrito()
})

//Ordenar por Categoría
let botonCategoria = document.getElementById("btn-categoria")
botonCategoria?.addEventListener("click", ordenarPorCat)

function ordenarPorCat() {
    carrito.sort((a, b) => {
        if (a.categoria > b.categoria) {
            return 1;
        } else if (a.categoria < b.categoria) {
            return -1;
        } else {
            return 0;
        }
    })
    actualizarCarrito()
}

//API
window.addEventListener("load", () => {
    let temperatura = document.getElementById("temp-valor")
    let ubicacion = document.getElementById("temp-ubicacion")
    let icono = document.getElementById("icono-animado")

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(posicion => {
            let lat = posicion.coords.latitude
            let lon = posicion.coords.longitude

            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=es&appid=f9099f19a2fb6a9a2fa610bda5852e8a`
            const kelvin = 273

            fetch(url)
                .then(response => {
                    return response.json()
                })
                .then(data => {
                    let temp = Math.round(data.main.temp - kelvin) + "°C"
                    temperatura.innerText = temp
                    ubicacion.innerText = data.name + ' - ' + data.sys.country

                    //Selección de icono
                    switch (data.weather[0].main) {
                        case 'Thunderstorm':
                            icono.src = './IconosTiempo/animated/thunder.svg'
                            break;
                        case 'Drizzle':
                            icono.src = './IconosTiempo/animated/rainy-2.svg'
                            break;
                        case 'Rain':
                            icono.src = './IconosTiempo/animated/rainy-7.svg'
                            break;
                        case 'Snow':
                            icono.src = './IconosTiempo/animated/snowy-6.svg'
                            break;
                        case 'Clear':
                            icono.src = '/ProyectoJava/IconosTiempo/animated/day.svg'

                            // icono.src = './IconosTiempo/animated/day.svg'
                            break;
                        case 'Atmosphere':
                            icono.src = './IconosTiempo/animated/weather.svg'
                            break;
                        case 'Clouds':
                            icono.src = './IconosTiempo/animated/cloudy-day-1.svg'
                            break;
                        default:
                            icono.src = './IconosTiempo/animated/cloudy-day-1.svg'
                    }

                })
                .catch(error => {
                    console.log(error)
                })

        })
    }
})


//Animar Logo
function animarLogo() {
    setInterval(moverCarrito, 1000)
    setInterval(pausarCarrito, 5000)
}

//Mover Carrito
function moverCarrito() {
    let logoCarrito = document.getElementById("logo-carrito")
    if (carrito.length > 0) {
        logoCarrito.style.animation = "botones 1.5s ease 1s 2 normal forwards"
    } else {
        vaciarCarrito()
    }
}

//Pausar Carrito
function pausarCarrito() {
    let logoCarrito = document.getElementById("logo-carrito")
    logoCarrito.style.animation = ""
}
