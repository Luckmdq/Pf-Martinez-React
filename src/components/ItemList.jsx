import { } from "react";
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';
import Item from "./Item";
import { useParams } from "react-router-dom";

/* mapea productos */


const ItemList = ({ productos }) => {
	const {category}=useParams()


	/* por defecto */
	return (
		<>
			{productos.map(e =>
				<Item
					key={e.id}
					id={e.id}
					titulo={e.title}
					imagen={e.image}
					precio={e.price}
				/>)}
		</>
	)
}

export default ItemList