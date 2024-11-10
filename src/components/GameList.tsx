"use client"

import games from "@/data/games";
import { Game } from "@/types/game";
import { useState } from "react";
import Image from "next/image";

const GameList = () => {
    const [cart, setCart] = useState<Game[]>([]);

    const addToCart = (game: Game): void => {
        setCart((prevCart) => [...prevCart, game]);
    }

    return (
        <div>
        <h2>Available Games</h2>
        <div className="relative" style={{listStyleType: 'none', padding: 0}}> 
            {/* TODO: PORIHTAJ UI */}
            {games.map((game) => (
            <div key={game.id} style={{ marginBottom: '10px' }} className=" border-2 rounded-md p-6">
                <Image src={game.image} alt={game.title} width={100} height={200} style={{ borderRadius: '8px' }} />
                <span>{game.title} - ${game.price.toFixed(2)}</span>
                <button onClick={() => addToCart(game)} className="absolute right-5 ms-10">
                        Add to Cart
                </button>
            </div>
            ))}
        </div>
        <h3>Cart</h3>
        <ul>
            {cart.map((game, index) => (
            <li key={index}>{game.title} - ${game.price.toFixed(2)}</li>
            ))}
        </ul>
        </div>
    )
};

export default GameList;
