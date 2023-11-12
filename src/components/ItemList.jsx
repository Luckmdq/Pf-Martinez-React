import { } from "react";
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';
import Item from "./Item";



const ItemList = ({ productos }) => {

	return (
		<>
			{productos.map(e =>
				<Item
					key={e.id}
					titulo={e.title}
					imagen={e.image}
					precio={e.price}
				/>)}
		</>
	)
}

export default ItemList