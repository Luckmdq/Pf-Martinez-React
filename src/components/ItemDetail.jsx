import React from 'react'
import { useParams } from 'react-router-dom'

const ItemDetail = ({ productos }) => {
	const { id } = useParams();
	const producto = productos.filter(prod => prod.id == id);

	return (
		<>
			{producto.map(elemento => {
				return (
					<div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
						<h5 className="text-xl ml-4 font-semibold tracking-tight text-gray-900 dark:text-white">{elemento.title}</h5>
						<img className="p-8 rounded" src={elemento.image} alt="product image" />
					</div>
				)
			})}
		</>

	)
}

export default ItemDetail