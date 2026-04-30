import React, {useState, useEffect} from "react";

export default function List ({ items }) {
    
    return (
        <div className="grid grid-cols-3 gap-20">
        {items.map(game => (
        <div>
            <div className="flex flex-col justify-between border border-slate-200 rounded-md p-4">
            <img src={game.photo} alt="TITLE BOXART" />
            <h2 className="text-lg font-bold mt-2">{game.title}</h2>
            <h3 className="text-lg font-bold mt-2">{game.total_units_sold}</h3>
            <p className="text-sm">{game.date_released}</p>
            </div>
            <div>
                <button className="mt2 rounded border border-slate-300 px-4 py-1">Edit</button>
            </div>
        </div>
    ))}
    </div>
    
    )

}

//if in ALL CAPS, replace with api data
//BELOW: "card"

/**
<div className="flex flex-col justify-between border border-slate-200 rounded-md p-4">
<img src="IMAGE" alt="TITLE BOXART" />
<h2 className="text-lg font-bold mt-2">TOTAL SALES</h2>
<p className="text-sm">DATE RELEASED</p>
</div>
<div>
    <button className="mt2 rounded border border-slate-300 px-4 py-1">Edit</button>
</div>
 */