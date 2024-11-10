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
            <div key={game.id} style={{ marginBottom: '10px' }} className="flex border-2 shadow-lg shadow-blue-500 rounded-md p-6">
                <Image src={game.image} alt={game.title} width={200} height={200} className="rounded-lg" />
                <span className="mx-8">{game.title} - ${game.price.toFixed(2)} <br></br><br></br>{game.description} </span>
                <button onClick={() => addToCart(game)} className="absolute bg-blue-500 right-5 ms-10 border-2 shadow-lg shadow-blue-500 rounded-md p-2 mb-20">
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
