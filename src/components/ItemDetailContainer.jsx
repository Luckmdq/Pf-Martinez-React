import ItemCount from "./ItemCount"
import ItemDetail from "./ItemDetail"
import { React, useState, useEffect } from "react"
import getProducts from "./getProducts";
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {

	/* Recibe la categoria para filtrar */
	const { id } = useParams()
	const [products, setProducts] = useState([])

	useEffect(() => {
		/* deberia considerarse el catch por si el response fuera un error? */
		getProducts().then(product => setProducts(product))
	},[])

	let item=products.find(elemento => elemento.id == id )



	return (
		<>
			{console.log(`${item.image}`)} 
			<div className="max-w-sm mx-auto mt-10 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
				<ItemDetail 
					titulo={item.title} 
					imagen={item.image}
				/>
				<ItemCount />
			</div> 
		</>
	)
}

export default ItemDetailContainer