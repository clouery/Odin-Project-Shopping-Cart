import { useCart } from "../context/CartContext";
import { Link } from "react-router";

export default function CartSideBar(isOpen, onClick) {
    const { items, addItem, removeItem, updateQuantity, clearCart, totalItem, totalPrice } = useCart();

    return (
        <>
            <div className="cart-overlay" onClick={onClick}>



            </div>

        </>
    )
}