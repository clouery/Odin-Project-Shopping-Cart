import { Link } from "react-router"

export default function Header() {

    return (
        <header>
            <h1>Gamers's World</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/shop">Shop</Link>
                    </li>
                    <li>
                        <Link to="/checkout">Checkout</Link>
                    </li>
                    <li>
                        <Link to="/cart">Cart</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}