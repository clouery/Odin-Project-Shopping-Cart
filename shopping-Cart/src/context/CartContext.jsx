import { createContext, useContext, useState } from "react";
import { useMemo } from "react";

const CartContext = createContext();

export function useCart() {
    return useContext(CartContext);
}

export function CartProvider({ children }) {
    const [items, setItems] = useState([]);

    function addItem(product) {
        setItems((prev) => {
            const existing = prev.find((item) => item.id === product.id);

            if (existing) {
                return prev.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }

            return [...prev, { ...product, quantity: 1 }];
        });
    }

    function removeItem(product) {
        setItems((prev) => {
            const existing = prev.find((item) => item.id === product.id);

            if (existing) {
                if (existing.quantity === 1) {
                    return prev.filter((item) => item.id !== product.id);
                }

                return prev.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                );
            }

            return prev;
        });
    }

    function updateQuantity(product, qty) {
        if (qty <= 0) {
            return(
                removeItem(product)
            )
        }
        setItems(prev => prev.map(
            item => item.id === product.id ? { ...item, quantity: qty } : item)
        );
    }

    function clearCart() {
        setItems([]);
    }

    const totalItem = items.reduce((sum, item) => sum + item.quantity, 0);

   const totalPrice = useMemo(() => items.reduce((sum, item) => sum + item.quantity * item.price, 0), [items]);

    return (
        <CartContext.Provider value={{ items, addItem, removeItem, updateQuantity, clearCart, totalItem, totalPrice}}>
            {children}
        </CartContext.Provider>
    );
}