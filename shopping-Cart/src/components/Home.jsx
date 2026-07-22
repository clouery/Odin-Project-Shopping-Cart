import GameCard from "./GameCard"
import NewsItems from "./NewsItem"
import { Link } from "react-router"

export default function Home() {
    return (
        <div className="home">

            <div className="banner">
                <div className="banner-content">
                    <h1 className="banner-title">Your Ultimate Game Destination</h1>
                    <p className="banner-subtitle">Lowest prices, fastest delivery</p>
                    <Link to="/shop" className="banner-cta">Shop Now</Link>
                </div>
            </div>

            <div className="news">
                <h2>Latest News</h2>
                <div className="news-list">
                    <NewsItems date="July 20, 2026" title="Summer Sale Starts Now!" desc="Up to 70% off on thousands of titles. Discounts on Elden Ring, Baldur's Gate 3, and more. Sale ends August 3rd." />
                    <NewsItems date="July 15, 2026" title="Hades II Early Access Launches" desc="The long-awaited sequel is now available on PC at the lowest price guaranteed." />
                    <NewsItems date="July 10, 2026" title="Price Drop: PS5 Console Bundles" desc="New all-time low prices on PlayStation 5 bundles including Stellar Blade and Spider-Man 2." />

                </div>
            </div>

            <div className="featured">
                <h2>Featured</h2>
                <ul>
                    <GameCard title="Elden Ring" platform="PC / PS5 / XBOX" price="$39.99" genre="RPG" />
                    <GameCard title="Baldur's Gate 3" platform="PC / PS5" price="$44.99" genre="RPG" />
                    <GameCard title="Hades II" platform="PC" price="$24.99" genre="Action" />
                    <GameCard title="Stellar Blade" platform="PS5" price="$45.99" genre="Action RPG" />
                    <GameCard title="Black Myth: Wukong" platform="PC / PS5" price="$45.99" genre="Action RPG" />
                    <GameCard title="Tekken 8" platform="PC / PS5 / Xbox" price="$41.99" genre="Fighting" />
                </ul>
            </div>

            <div className="context">
                <h2>Why Us?</h2>
                <ul>
                    <li>Real time comparison with other sites to give you the lowest price</li>
                    <li>This is a all u can buy website for all games, consoles, keys and much more!</li>
                    <li>Lowest Price Guaranteed!</li>
                </ul>
            </div>

        </div>
    )
}