/* const productos = [
    { id: 1, nombre: "Laptop", precio: 2000 },
    { id: 2, nombre: "Televisor", precio: 3500 },
    { id: 3, nombre: "Tablet", precio: 800 }
]

const cargaProd = new Promise((resolve, reject) => {
    if (productos.length > 0) {
        setTimeout(() => {
            resolve(items)
        }, 5000)
    } else {
        reject("No hay Productos")
    }
})

cargaProd
    .then((resultado) => { console.log(resultado) })
    .catch((resultado) => { console.log(resultado) })
*/

/* otro tipo de carga */

const getProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products")

    const data = await response.json()
    return data
}

export default getProducts
