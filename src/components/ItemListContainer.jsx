import { Result } from "postcss"
import ItemCount from "./ItemCount"
import ItemList from "./ItemList"
import { React, useState, useEffect } from "react"

const ItemListContainer = ({ greeting }) => {
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

	const [products, setProducts] = useState([])

	useEffect(() => {
		/* deberia considerarse el catch por si el response fuera un error? */
		getProducts().then((product) => setProducts(product))
	}, [/* tiempo de espera no seria necesario por el await? */])


	return (
		<>
			<div className="max-w-sm mx-auto mt-10 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
				{products.map(e => (
					<>
						{console.log(e.title)}{
						<ItemList 
							key={e.id}
							titulo={e.title} />}
					</>
				))}
				{/* Contador */}
				<ItemCount />
			</div>
		</>
	)
}

export default ItemListContainer