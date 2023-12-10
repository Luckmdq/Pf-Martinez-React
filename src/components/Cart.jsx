import { useState, useEffect, useContext } from 'react'
import getProducts from './getProducts'
import { CartContext } from '../context/cartContext'
import { Link } from "react-router-dom";

export const Cart = () => {

	/* si bien le agrego la logica en esta instancia es para no almacenar tanta memoria en el local storage con los productos, me parecio mas limpio de este modo, pero no se si compensa eso el echo de traer todos los productos de la base de datos.. */
	const [products, setProducts] = useState([])

	useEffect(() => {
		getProducts().then(product => setProducts(product));
	}, [])

	const filtrados = []


	const { cart, precioTotal } = useContext(CartContext);

	cart.map(e => {
		products.map(producto => {
			if (producto.id == e.itemId) {
				/* podria hacerlo en una misma linea pero me parece mas entedible usar la variable extra */
				let elemento = { ...producto, "cantidad": e.cantidad }
				filtrados.push(elemento);
			}
		})
	})

	const styles={
		"input":"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
		"label":"block mb-2 text-sm font-medium text-gray-900"
	}

	return (

		<>

			{/* resumen de compra */}
			<div class=" mt-12 relative overflow-x-auto shadow-md sm:rounded-lg">
				<table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
					<thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
						<tr>
							<th scope="col" class="px-6 py-3">
								Product name
							</th>
							<th scope="col" class="px-6 py-3">
								cantidad
							</th>
							<th scope="col" class="px-6 py-3">
								Category
							</th>
							<th scope="col" class="px-6 py-3">
								Price/U
							</th>
							<th scope="col" class="px-6 py-3">
								Price/T
							</th>
							<th scope="col" class="px-6 py-3">
								<span class="sr-only">Edit</span>
							</th>
						</tr>
					</thead>
					<tbody>
						{filtrados.map(e =>
							<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
								<th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
									{e.title}
								</th>
								<td class="px-6 py-4">
									{e.cantidad}
								</td>
								<td class="px-6 py-4">
									{e.category}
								</td>
								<td class="px-6 py-4">
									${e.price}
								</td>
								<td class="px-6 py-4">
									${e.price * e.cantidad}
								</td>
								<td class="px-6 py-4">
									<a href="#" class=" mr-1 font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
									<a href="#" class=" ml-1 font-medium text-blue-600 dark:text-blue-500 hover:underline">Delete</a>
								</td>
							</tr>
						)}
					</tbody>
				</table>

			</div>

			{/* formulario */}
			<form class="max-w-sm mx-auto my-4">
				<div className="inline-flex -space-x-px text-xl mr-3">
					<p>total de la compra: {precioTotal()}$</p>
				</div>
				<div class="mb-5">
					<label for="email" className={styles.label} >Your email</label>
					<input type="email" id="email" className={styles.input} placeholder="Email" required />
				</div>
				<div class="mb-5">
					<label for="emailRepeat" className={styles.label} >Repeat email</label>
					<input type="email" id="emailRepeat" className={styles.input} placeholder="Repeat Email" required />
				</div>
				<div class="mb-5">
					<label for="name" className={styles.label} >Nombre</label>
					<input type="text" id="name" className={styles.input} placeholder='Nombre' required />
				</div>
				<div class="mb-5">
					<label for="lastName" className={styles.label} >Apellido</label>
					<input type="text" id="lastName" className={styles.input} placeholder='Apellido' required />
				</div>
				<div class="mb-5">
					<label for="tel" className={styles.label} >Tel</label>
					<input type="number" id="tel" className={styles.input} placeholder='123456789' required />
				</div>
			</form>


			{/* finlaizacion */}
			<button className=" ml-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Completar Compra</button>

		</>
	)
}
