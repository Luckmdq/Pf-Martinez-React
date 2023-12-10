import { useState, useEffect, useContext } from 'react'
import getProducts from './getProducts'
import { CartContext } from '../context/cartContext'

export const Cart = () => {

	/* si bien le agrego la logica en esta instancia es para no almacenar tanta memoria en el local storage con los productos, me parecio mas limpio de este modo, pero no se si compensa eso el echo de traer todos los productos de la base de datos.. */
	const [products, setProducts] = useState([])

	useEffect(() => {
		getProducts().then(product => setProducts(product));
	}, [])

	const filtrados = []


	const { cart } = useContext(CartContext);

	cart.map(e => {
		products.map(producto => { 
			if(producto.id == e.itemId){
				/* podria hacerlo en una misma linea pero me parece mas entedible usar la variable extra */
				let elemento={...producto,"cantidad":e.cantidad}
				filtrados.push(elemento);
			}
		})
	})

	return (


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
					{filtrados.map(e=>
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
								${e.price*e.cantidad}
							</td>
							<td class="px-6 py-4 text-right">
								<a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
							</td>
						</tr>
					)}
				</tbody>
			</table>
			
		</div>

	)
}
