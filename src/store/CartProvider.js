import CartContext from "./cart-context";

const CartProvider = (props) => {
	const addItemToCartHandler = (item) => {};
	const removeItemFromCartHeandler = (id) => {};

	const cartContext = {
		items: [],
		totalAmoutn: 0,
		addItem: addItemToCartHandler,
		removeItem: removeItemFromCartHeandler,
	};
	return (
		<CartContext.Provider value={cartContext}>
			{props.children}
		</CartContext.Provider>
	);
};

export default CartProvider;
