import { } from "react";
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';
import Item from "./Item";


const ItemList = ({ productos }) => {

	/* al recibir el array podria empezar a diferenciar que mostrar */
	return (
		<>

			{productos.map(e =>
				<Item
					key={e.id}
					titulo={e.title}
					imagen={e.image}
				/>)}
		</>
	)
}

export default ItemList