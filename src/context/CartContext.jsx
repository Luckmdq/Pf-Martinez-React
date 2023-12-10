import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const cartInit = JSON.parse(localStorage.getItem("cart")) || [];

export const CartProvider = ({ children }) => {
	const [cart, setCart] = useState(cartInit);

	useEffect(()=>{
		localStorage.setItem("cart",JSON.stringify(cart))
	},[cart])

	const addCart = (itemId, cantidad,valor) => {
		const addProduct = { itemId, cantidad,valor };
		const products = [...cart];
		const producto = products.find(e => e.itemId === addProduct.itemId);
		producto ? producto.cantidad += cantidad : products.push(addProduct)
		setCart(products);
	}

	const cantidadTotal = () => {
		return cart.reduce((acc, prod) => acc + prod.cantidad, 0);
	}

	const precioTotal = () => {
		return cart.reduce((acc, prod) => acc + (prod.valor * prod.cantidad), 0)
	}

	const vaciarCarrito = () => {
		setCart([]);
	}

	return (
		<CartContext.Provider value={{ 
			cart, 
			addCart, 
			cantidadTotal, 
			precioTotal, 
			vaciarCarrito 
		}}>
			{children}
		</CartContext.Provider>
	)
}