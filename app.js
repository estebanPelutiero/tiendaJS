// Clase constructora de objetos que crean productos, con su nombre y precio.

class productBuilder {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

// funcion para ejecutar un console.log()

function showWithLog(msg) {
    console.log(msg)
}

// Declaro variables constantes que contienen los nuevos objetos con los productos.

const prod1 = new productBuilder("cerveza", 250);
const prod2 = new productBuilder("arroz", 170);
const prod3 = new productBuilder("pan", 200);
const prod4 = new productBuilder("helado", 800);
const prod5 = new productBuilder("agua", 100);

// Meto los objetos en un array y declaro otro array vacio. Este es el carrito de compras, se llenará luego con las elecciones del user.

const products = [prod1, prod2, prod3, prod4, prod5];
const shopCart = [];

// Creo un bucle que le pide al user que ingrese si quiere o no comprar un producto.

let welcome = prompt("Bienvenido, desea comprar algún producto? Ingrese si o no.");

while (welcome != "si" && welcome != "no") {
    welcome = prompt("Por favor, escriba si o no.");
}

/* Si el user ingresa "si" muestra la lista de productos, utilizando el metodo map() y el metodo join().
   Si el user ingresa "no" muestra un mensaje despidiendolo. */

if (welcome == "si") {
    alert("Aqui esta nuestra lista de productos!");
    let showProductList = products.map((products) => products.name + " - $" + products.price);
    alert(showProductList.join("\n"));
} else if (welcome == "no") {
    alert("Gracias por venir, hasta pronto!");
}

// Al salir del condicional anterior entra directamente en este bucle que pide al user el nombre del producto que desea comprar.

while (welcome != "no") {

    // Inicializo una variable del precio total, que dependera del producto y la cantidad de unidades que compre el user.

    let userSelection = prompt("Ingrese el producto que desea comprar:");
    let totalPrice = 0;

    if (userSelection == "cerveza" || userSelection == "arroz" || userSelection == "pan" || userSelection == "helado" || userSelection == "agua") {

        /* Uso un switch para ir cambiando la variable del precio, dependiendo del producto.
        Llamo los precios con indices. */

        switch (userSelection) {
            case "cerveza":
                totalPrice = products[0].price;
                break;
            case "arroz":
                totalPrice = products[1].price;
                break;
            case "pan":
                totalPrice = products[2].price;
                break;
            case "helado":
                totalPrice = products[3].price;
                break;
            case "agua":
                totalPrice = products[4].price;
                break;
            default:
                break;
        }

        // Pregunto al user la cantidad de unidades que llevara del producto.

        let units = +prompt("Cuantas unidades desea llevar?");

        // Con el metodo push(), meto al array del carrito (que esta vacio), el nombre del producto, las unidades y el precio total.

        shopCart.push({
            userSelection,
            units,
            totalPrice
        });
    }

    // Cada vez que el user elija un producto y las unidades, guarda esa data. Luego pregunto si desea seguir comprando.

    welcome = prompt("Desea comprar otro producto? Ingrese si o no.");

    /* Este bucle es cuando el user ingresa que no desea seguir comprando. Por lo tanto, muestra por consola como queda el carrito de compras 
    hasta el momento. Utilizo el metodo forEach() para mostrar la seleccion de productos del usuario, la cantidad de unidades de cada producto, y el total a pagar, multiplicando las unidades por el precio unitario */

    while (welcome == "no") {
        alert("Muchas gracias por su compra, lo esperamos pronto!");
        shopCart.forEach((finalShopCart) => {
            showWithLog(`Producto: ${finalShopCart.userSelection} - Unidades: ${finalShopCart.units} - Total a pagar por producto: $${finalShopCart.units * finalShopCart.totalPrice}`);
        });
        break;
    }
}

/* Si el user elije no seguir comprando, salimos del bucle y llegamos a esta instancia del programa donde utilizamos el metodo reduce() sobre
el array del carrito, para mostrar el total, multiplicando el precio unitario por la cantidad de unidades y luego sumando cada valor obtenido de cada producto al acumulador*/

const finalOrder = shopCart.reduce((acc, el) => acc + el.totalPrice * el.units, 0);

// Mostramos el resultado en consola y termina la ejecución del programa.

showWithLog(`El total a pagar por su compra es: $${finalOrder}`);
