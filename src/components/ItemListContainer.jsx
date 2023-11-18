import ItemCount from "./ItemCount"
import ItemList from "./ItemList"
import { React, useState, useEffect } from "react"
import getProducts from "./getProducts";
import { useParams } from "react-router-dom"; 

/* trae resultados de end point (logica) */

const ItemListContainer = () => {
	
	/* Recibe la categoria para filtrar */
	/* const {category}=useParams()
 */
	const [products, setProducts] = useState([])

	useEffect(() => {
		/* deberia considerarse el catch por si el response fuera un error? */
		getProducts().then((product) => setProducts(product))
	}, [/* tiempo de espera no seria necesario por el await? */])


	return (
		<>
			<div className="max-w-sm mx-auto mt-10 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
				<ItemList productos={products}/>
				{/* Contador */}
				<ItemCount />
			</div>
		</>
	)
}

export default ItemListContainer