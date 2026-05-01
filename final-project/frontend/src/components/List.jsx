import React, {useState, useEffect} from "react";
import Leaderboard from "./Leaderboard";

export default function List ({ items }) {

  const [mode, setMode] = useState("game_list");
  const [game, setGame] = useState(null);

  function showLeaderboard(game) {
    setMode("Leaderboard");
    setGame(game);
  }


    if (mode === "game_list") {
    return (
        <div className="grid grid-cols-3 gap-20">
        {items.map(game => (
        <div>
            <div className="flex flex-col justify-between border border-slate-200 rounded-md p-4">
            <img src={game.photo} alt="TITLE BOXART" />
            <h2 className="text-lg font-bold mt-2">{game.title}</h2>
            <h3 className="text-lg font-bold mt-2">{game.total_units_sold} Million Units</h3>
            <p className="text-sm">{game.date_released}</p>
            <button className="mt-4 rounded border border-slate-300 px-4 py-1"
                onClick={()=>showLeaderboard(game)}>Leaderboard</button>
            </div>
            <div>
                
            </div>
        </div>
    ))}
    </div>
    
    )

}
    if (mode === "Leaderboard") {
        return <Leaderboard game={game} />;
    }
}