const listaProductos = []
const listaCategoria = ['Frenos', 'Neumaticos', 'Baterias', 'Limpieza']

//Clase Producto
class Producto {
    constructor(categoria, id, marca, precio) {
        this.categoria = categoria;
        this.id = id;
        this.marca = marca;
        this.precio = precio;
    }

    //Nuevo Producto
    nuevoProducto() {
        let control = false;
        while (!control) {
            let opcion = prompt('Ingresar datos del Producto \n \nSelecione una categoría de la lista: \n\n' + mostrarCategorias(listaCategoria));
            switch (opcion) {
                case '1':
                    this.categoria = 0;
                    control = true;
                    break

                case '2':
                    this.categoria = 1;
                    control = true;
                    break

                case '3':
                    this.categoria = 2;
                    control = true;
                    break

                case '4':
                    this.categoria = 3;
                    control = true;
                    break

                default:
                    alert("El valor ingresado es incorrecto")
                    control = false;
            }
        }

        this.id = validarID(listaProductos)
        this.marca = validarTexto('marca')
        this.precio = validarNumero('precio')

        let producto = new Producto(this.categoria, this.id, this.marca, this.precio);
        return producto;
    }
}

//Menú Principal
function menuPrincipal() {
    let seguirComprando = true;
    while (seguirComprando) {
        let opcion = prompt('Bienvenidos a Autorrepuestos Atlántida, que le gustaría hacer: \n \n 1-Ingresar un Producto \n 2-Ver productos Ingresados \n 3-Ordenar Productos \n 4-Eliminar un producto \n 5-Salir')
        switch (opcion) {
            case '1':
                agregarProducto(listaProductos)
                break

            case '2':
                mostrarProductos(listaProductos)
                break

            case '3':
                ordenarProductos(listaProductos)
                break

            case '4':
                eliminarProducto(listaProductos)
                break

            case '5':
                seguirComprando = false;
                break
        }
    }
}

//Agregar Producto
function agregarProducto(lista) {
    let producto = new Producto()
    lista.push(producto.nuevoProducto());
    alert('Producto agregado correctamente!')
}

//Mostrar Categorías
function mostrarCategorias(lista) {
    let resultado = ''
    lista.forEach((elemento, index) => {
        resultado += (index + 1) + '- ' + elemento + '\n'
    })
    return resultado;
}

//Mostrar lista de Productos 
function mostrarProductos(lista) {
    if (lista.length >= 1) {
        let resultado = ''
        let total = 0;
        lista.forEach((elemento, index) => {
            resultado += 'Producto ' + (index + 1) + ':\n\n' + 'ID: ' + elemento.id + '\n' +
                'Marca: ' + elemento.marca + '\n' +
                'Categoria: ' + listaCategoria[elemento.categoria] + '\n' +
                'Precio: $ ' + elemento.precio + '\n \n'
            total += parseInt(elemento.precio);
        })
        resultado = resultado + 'Total: $' + total;
        alert(resultado);
    } else {
        alert('No hay productos ingresados!')
    }
}


//Menú ordenar productos:
function ordenarProductos(lista) {
    if (lista.length >= 1) {
        let opcion = prompt('Elija el criterio por el cual le gustaría ordenar: \n \n 1- Ordenar por precio (de menor a mayor) \n 2- Ordenar por categoria \n')
        switch (opcion) {
            case '1':
                mostrarProductos(ordenarPorPrecio(listaProductos))
                break

            case '2':
                mostrarProductos(ordenarPorCategoria(listaProductos))
                break

            case '3':
                break
        }
    } else {
        alert('No hay productos ingresados!')
    }
}

//Ordenar por precio
function ordenarPorPrecio(lista) {
    const arrayPorPrecio = lista.slice();
    arrayPorPrecio.sort((a, b) => {
        if (a.precio > b.precio) {
            return 1;
        } else if (a.precio < b.precio) {
            return -1;
        } else {
            return 0;
        }
    })
    return arrayPorPrecio;
}

//Ordenar por Categoría
function ordenarPorCategoria(lista) {
    const arrayPorCategoria = lista.slice();
    arrayPorCategoria.sort((a, b) => {
        if (a.categoria > b.categoria) {
            return 1;
        } else if (a.categoria < b.categoria) {
            return -1;
        } else {
            return 0;
        }
    })
    return arrayPorCategoria;
}


//Buscar producto
function buscarProducto(lista, valor) {
    return lista.find((elemento) =>
        elemento.id == valor
    )
}

//Eliminar un producto
function eliminarProducto(lista) {
    if (lista.length >= 1) {
        let resultado = ''
        lista.forEach((elemento, index) => {
            resultado += 'Producto ' + (index + 1) + ':\n' + 'Marca: ' + elemento.marca + ' - Precio: $ ' + elemento.precio + ' - Cat: ' + listaCategoria[elemento.categoria] + ' - ID: ' + elemento.id + '\n \n'
        })
        let opcion = prompt('¿Qué producto desea eliminar? \n \n' + resultado + '(Ingrese el ID del producto a eliminar)')
        let continuar = true;

        let producto = buscarProducto(listaProductos, opcion);

        while (continuar) {
            if (producto != undefined) {
                let valor = (prompt('¿Desea eliminar este producto? \n\n Marca: ' + producto.marca + ' - Precio: $ ' + producto.precio + ' - ID: ' + producto.id + '\n\n ** Ingresar SI / NO **')).toUpperCase()
                if (valor == 'SI') {
                    lista.splice(lista.indexOf(producto), 1);
                    alert("Producto eliminado correctamente!")
                    if (lista.length >= 1) {
                        mostrarProductos(lista)
                    }
                    continuar = false;

                } else if (valor == 'NO') {
                    continuar = false;
                    alert('NO se ha eliminado el producto con ID: ' + opcion)

                } else {
                    alert('Debe ingresar una opcion correcta!')
                }

            } else {
                alert("El producto con ID: " + opcion + ' no existe!')
                continuar = false;
            }
        }

    } else {
        alert('No hay productos ingresados!')
    }
}


//VALIDAR TEXTO:
function validarTexto(item) {
    let resultado = true;
    let texto;
    while (resultado) {
        texto = prompt('Ingrese la ' + item + ' de su producto')
        if (campoVacio(texto)) {
            alert('Debes ingresar una ' + item + '!')
        } else {
            resultado = false;
        }
    }
    return texto;
}


// VALIDAR INGRESO DE NÚMERO
function validarNumero(item) {
    let resultado = true;
    let numero;
    while (resultado) {
        numero = prompt('Ingrese el ' + item + ' de su producto:')
        resultado = isNaN(numero)
        if (resultado || campoVacio(numero)) {
            alert("Debes ingresar un número," + ' " ' + numero + ' " ' + " no es un valor correcto!")
            resultado = true;
        } else {
            resultado = false;
        }
    }
    return parseInt(numero);
}

// VALIDAR ID
function validarID(lista) {
    let resultado = true;
    let numero;
    while (resultado) {
        numero = prompt('Ingrese el ID de su producto:')
        resultado = isNaN(numero)
        if (resultado || campoVacio(numero)) {
            alert("Debes ingresar un número," + ' " ' + numero + ' " ' + " no es un valor correcto!")
            resultado = true;
        } else if (!valorUnico(lista, numero)) {
            alert("Debes ingresar un número único. El ID: " + numero + " ya existe!")
            resultado = true;
        } else {
            resultado = false;
        }
    }
    return parseInt(numero);
}

//VALIDAR ID ÚNICO
function valorUnico(lista, numero) {
    let unico = true;
    if (lista.length >= 1) {
        lista.forEach(item => {
            if (item.id == numero) {
                unico = false;
            }
        })
    }
    return unico;
}

//CAMPO VACIO
function campoVacio(dato) {
    if (dato == '') {
        return true;
    } else {
        return false;
    }
}


menuPrincipal()