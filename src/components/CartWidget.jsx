import { useContext } from "react";
import { BsMinecart } from "react-icons/bs";
import { CartContext } from "../context/cartContext";
import getProducts from "./getProducts";

function CartWidget () {
	const productos=getProducts();

	const {cantidadTotal} = useContext(CartContext)
	return (
		<button className="inline-flex items-center px-4 py-2.5 text-xl font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
			
			
			<BsMinecart />

			<span className="inline-flex items-center justify-center w-4 h-4 ml-2 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full">
				{cantidadTotal()}
			</span>
		</button>
	)

}
export default CartWidget