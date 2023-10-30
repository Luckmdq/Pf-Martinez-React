import ItemCount from "./ItemCount"

function ItemListContainer(greeting) {
	return (
		<>
		<div class="max-w-sm mx-auto mt-10 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
			<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{`${greeting.mensaje}`}</h5>
			<p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
			{/* Contador */}
			<ItemCount />
		</div>
		</>
	)
}

export default ItemListContainer