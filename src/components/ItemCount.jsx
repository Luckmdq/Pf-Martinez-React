import { useState } from "react"
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


function ItemCount() {

	const [count, setcount] = useState(0);

	const incress = () => {
		(count < 10) && setcount(prevstate => prevstate + 1)
	}

	const decress = () => {
		count > 0 && setcount(prevstate => prevstate - 1)
	}

	const alerta = () => {
		toast(`Agregando al carrito ${count} productos`);
	}
	return (
		<div className="">
			<div className="inline-flex -space-x-px text-sm mr-3">
				<button className="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" onClick={decress}>-</button>

				<p className="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50  hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white select-none">{count}</p>

				<button className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" onClick={incress}>+</button>


			</div>
			<button className=" ml-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={alerta}>Agregar</button>
			<ToastContainer />
		</div>
	)
}

export default ItemCount