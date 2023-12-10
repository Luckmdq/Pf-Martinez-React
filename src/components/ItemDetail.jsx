import React from 'react'
import { useParams } from 'react-router-dom'
import ItemCount from './ItemCount'

const ItemDetail = ({ productos }) => {
	const { id } = useParams();
	const producto = productos.filter(prod => prod.id == id);

	return (
		<>
			{producto.map(elemento => {
				return (
					<div className=" max-h-96 overflow grid gap-y-5 justify-items-center w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
						<h5 className="text-xl  font-semibold tracking-tight text-gray-900 dark:text-white">{elemento.title}</h5>
						<img className=" rounded max-h-40" src={elemento.image} alt="product image" />
						<p className="text-sm font-normal text-gray-700 dark:text-gray-400 ">{elemento.description}</p>
						<ItemCount itemId={elemento.id} valor={elemento.price} />
					</div>
				)
			})}
		</>

	)
}

export default ItemDetail