import { BsMinecart } from "react-icons/bs";

function CartWidget () {
	return (
		<button class="inline-flex items-center px-4 py-2.5 text-xl font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
			<BsMinecart />

			<span class="inline-flex items-center justify-center w-4 h-4 ml-2 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full">
				3
			</span>
		</button>
	)

}
export default CartWidget