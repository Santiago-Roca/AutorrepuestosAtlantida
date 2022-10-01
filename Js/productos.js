
const suma = (a, b) => a + b
let total = 0;
let carrito = ''
let seguirComprando = true

while (seguirComprando) {
    let opcion = prompt("Seleccione una categoría de la lista para iniciar su compra:" + '\n' + '\n' + "1- Frenos" + '\n' + "2-Neumáticos" + '\n' + "3-Baterias" + '\n' + "4-Productos de limpieza" + '\n' + "5-Ver carrito de compras" + '\n' + "6-Salir / Finalizar compras")
    let control = false
    switch (opcion) {
        case '1':
            while (!control) {
                let valor = prompt("Seleccione una opción para agreagar al carrito de compras:" + '\n' + '\n' + "1-Frenos de disco de 150mm - $1200" + '\n' + "2-Frenos de disco de 180mm - $1400" + '\n' + "3-Frenos de disco de 250mm - $1600" + '\n' + "4-Frenos de disco de 310mm - $1900" + '\n' + "5-Volver al menú principal")
                switch (valor) {
                    case '1':
                        alert("Frenos de disco de 150mm - $1200 / AGREGADO")
                        carrito = carrito + '\n' + "Frenos de disco de 150mm - $1200"
                        total = suma(total, 1200)
                        control = true
                        break
                    case '2':
                        alert("Frenos de disco de 180mm - $1400 / AGREGADO")
                        carrito = carrito + '\n' + "Frenos de disco de 180mm - $1400"
                        total = suma(total, 1400)
                        control = true
                        break
                    case '3':
                        alert("Frenos de disco de 250mm - $1600 / AGREGADO")
                        carrito = carrito + '\n' + "Frenos de disco de 250mm - $1600"
                        total = suma(total, 1600)
                        control = true
                        break
                    case '4':
                        alert("Frenos de disco de 310mm - $1900 / AGREGADO")
                        carrito = carrito + '\n' + "Frenos de disco de 310mm - $1900"
                        total = suma(total, 1900)
                        control = true
                        break
                    case '5':
                        control = true
                        break
                    default:
                        alert("El valor ingresado es incorrecto")
                        control = false
                }
            }

            break

        case '2':
            while (!control) {
                let valor = prompt("Seleccione una opción para agreagar al carrito de compras:" + '\n' + '\n' + "1-Neumaticos rodado 13 - $2100" + '\n' + "2-Neumaticos rodado 14 - $2300" + '\n' + "3-Neumaticos rodado 15 - $2500" + '\n' + "4-Neumaticos rodado 16 - $2800" + '\n' + "5-Volver al menú principal")
                switch (valor) {
                    case '1':
                        alert("Neumaticos rodado 13 - $2100 / AGREGADO")
                        carrito = carrito + '\n' + "Neumaticos rodado 13 - $2100"
                        total = suma(total, 2100)
                        control = true
                        break
                    case '2':
                        alert("Neumaticos rodado 14 - $2300 / AGREGADO")
                        carrito = carrito + '\n' + "Neumaticos rodado 14 - $2300"
                        total = suma(total, 2300)
                        control = true
                        break
                    case '3':
                        alert("Neumaticos rodado 15 - $2500 / AGREGADO")
                        carrito = carrito + '\n' + "Neumaticos rodado 15 - $2500"
                        total = suma(total, 2500)
                        control = true
                        break
                    case '4':
                        alert("Neumaticos rodado 16 - $2800 / AGREGADO")
                        carrito = carrito + '\n' + "Neumaticos rodado 16 - $2800"
                        total = suma(total, 2800)
                        control = true
                        break
                    case '5':
                        control = true
                        break
                    default:
                        alert("El valor ingresado es incorrecto")
                        control = false
                }
            }
            break

        case '3':
            while (!control) {
                let valor = prompt("Seleccione una opción para agreagar al carrito de compras:" + '\n' + '\n' + "1-Batería de 45 amp - $4800" + '\n' + "2-Batería de 60 amp - $6400" + '\n' + "3-Batería de 75 amp - $9200" + '\n' + "4-Volver al menú principal")
                switch (valor) {
                    case '1':
                        alert("Batería de 45 amp - $4800 / AGREGADO")
                        carrito = carrito + '\n' + "Batería de 45 amp - $4800"
                        total = suma(total, 4800)
                        control = true
                        break
                    case '2':
                        alert("Batería de 60 amp - $6400 / AGREGADO")
                        carrito = carrito + '\n' + "Batería de 60 amp - $6400"
                        total = suma(total, 6400)
                        control = true
                        break
                    case '3':
                        alert("Batería de 75 amp - $9200 / AGREGADO")
                        carrito = carrito + '\n' + "Batería de 75 amp - $9200"
                        total = suma(total, 9200)
                        control = true
                        break
                    case '4':
                        control = true
                        break
                    default:
                        alert("El valor ingresado es incorrecto")
                        control = false
                }
            }
            break


        case '4':
            while (!control) {
                let valor = prompt("Seleccione una opción para agreagar al carrito de compras:" + '\n' + '\n' + "1-Shampoo espuma - $480" + '\n' + "2-Limpia parabrisas - $230" + '\n' + "3-Cera al agua - $320" + '\n' + "4-Cepillos y trapo de secado - $550" + '\n' + "5-Volver al menú principal")
                switch (valor) {
                    case '1':
                        alert("Shampoo espuma - $480 / AGREGADO")
                        carrito = carrito + '\n' + "Shampoo espuma - $480"
                        total = suma(total, 480)
                        control = true
                        break
                    case '2':
                        alert("Limpia parabrisas - $230 / AGREGADO")
                        carrito = carrito + '\n' + "Limpia parabrisas - $230"
                        total = suma(total, 230)
                        control = true
                        break
                    case '3':
                        alert("Cera al agua - $320 / AGREGADO")
                        carrito = carrito + '\n' + "Cera al agua - $320"
                        total = suma(total, 320)
                        control = true
                        break
                    case '4':
                        alert("Cepillos y trapo de secado - $550 / AGREGADO")
                        carrito = carrito + '\n' + "Cepillos y trapo de secado - $550"
                        total = suma(total, 550)
                        control = true
                        break
                    case '5':
                        control = true
                        break
                    default:
                        alert("El valor ingresado es incorrecto")
                        control = false
                }
            }
            break


        case '5':
            if (carrito == '') {
                alert("Su carrito de compras está vacío.")

            } else {
                alert("Su carrito de compras tiene: " + '\n' + carrito)
            } break


        case '6':
            seguirComprando = false
            break


        default:
            alert("El valor ingresado es incorrecto")
            break
    }

}

if (carrito != '') {
    alert("Su carrito de compras tiene: " + '\n' + carrito + '\n' + '\n' + "El costo total por los productos seleccionados es: $" + total)
}

