"use client"

import games from "@/data/games";
import { Game } from "@/types/game";
import { useState } from "react";
import Image from "next/image";

const GameList = () => {
    const [cart, setCart] = useState<Game[]>([]);

    const addToCart = (game: Game) => {
        if (!cart.find((item) => item.id === game.id)) {
          setCart([...cart, game]);
        }
    };

    const removeFromCart = (gameId: number) => {
        setCart(cart.filter((game) => game.id !== gameId));
    };

    return (
        
        <div className="lg:flex">
            <div className="relative lg:w-8/12 md:w-12 sm:w-12" style={{listStyleType: 'none', padding: 0}}> 
                {/* TODO: PORIHTAJ UI */}
                {games.map((game) => (
                <div key={game.id} style={{ marginBottom: '10px' }} className="flex border-2 shadow-lg shadow-blue-500 rounded-md p-6 ">
                    <Image src={game.image} alt={game.title} width={200} height={200} className="rounded-lg h-48" />
                    <span className="mx-8">{game.title} - ${game.price.toFixed(2)} <br></br><br></br>{game.description} </span>
                    <button onClick={() => addToCart(game)} className="absolute bg-blue-500 right-5 ms-10 border-2 shadow-lg shadow-blue-500 rounded-md p-2 mb-20">
                            Add to Cart
                    </button>
                </div>
                ))}
            </div>
            <div className="relative lg:w-4/12 md:w-12 sm:w-12">
                <h3 className="text-center">KOŠARICA</h3>
                {cart.length > 0 ? (
                <ul>
                    {cart.map((game) => (
                        <div key={game.id} className="border-2 shadow-lg shadow-blue-500 rounded-md ml-2 h-auto p-4 my-4 " >
                        {game.title} - ${game.price.toFixed(2)}
                        <button onClick={() => removeFromCart(game.id)} className=" bg-red-500  ms-12 right-0 border-2 shadow-lg shadow-blue-500 rounded-md p-2 ">Izbriši</button>
                        </div>
                    ))}
                </ul>
                
                ) : (
                    <h3 className="text-center">Košarica je Prazna</h3>
                )}
            </div>
        </div>
    )
};

export default GameList;
