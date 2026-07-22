
export default function GameCard({title, platform, genre, price}) {

    return (
        <li className="game-card">
            <div className="game-image">
                <span>🎮</span>
            </div>
            <div className="game-body">
                <h3 className="game-title">{title}</h3>
                <div className="game-meta">
                    <span className="game-platform">{platform}</span>
                    <span className="game-genre">{genre}</span>
                </div>
                <p className="game-price">{price}</p>

            </div>
        </li>
    )
}