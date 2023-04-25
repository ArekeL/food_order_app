import { useReducer } from "react";

import CartContext from "./cart-context";

const defaultCartState = {
	item: [],
	totalAmout: 0,
};

const cartReducer = (state, action) => {
	if (action.type === "ADD") {
		const updatedItems = state.items.contact(action.item);
		const updatedTotalAmount =
			state.totalAmout + action.item.price * action.item.amount;
		return {
			items: updatedItems,
			totalAmout: updatedTotalAmount,
		};
	}
	return defaultCartState;
};

const CartProvider = (props) => {
	const [cartState, dispatchCartAction] = useReducer(
		cartReducer,
		defaultCartState
	);
	const addItemToCartHandler = (item) => {
		dispatchCartAction({ type: "ADD", item: item });
	};
	const removeItemFromCartHeandler = (id) => {
		dispatchCartAction({ type: "REMOVE", id: id });
	};

	const cartContext = {
		items: cartState.items,
		totalAmoutn: cartState.totalAmout,
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
