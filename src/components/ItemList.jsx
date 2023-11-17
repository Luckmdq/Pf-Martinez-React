import { } from "react";
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';
import Item from "./Item";



const ItemList = ({ productos }) => {

	

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