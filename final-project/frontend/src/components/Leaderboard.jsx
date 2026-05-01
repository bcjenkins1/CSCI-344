import React, {useState, useEffect} from "react";

export default function Leaderboard({game}) {
    console.log(game);

    const [hunts, setHunts] = useState([]);

    const baseURL = import.meta.env.VITE_API_BASE_URL;

    useEffect(() => {
        async function getItems() {
          const response = await fetch(`${baseURL}/api/hunts?game=${game.id}`);
          const data = await response.json();
          setHunts(data);
          console.log(data);
        }
    
        getItems();
      }, []);

    return(
        <>
        <div className="flex flex-col md:flex-row justify-between mt-8 gap-4">
            <p className="mb-5">{game.title} Leaderboard</p>
            <button className="rounded bg-slate-800 px-6 py-2 text font-medium text-white mb-5">Add New</button>
        </div>
        <div className="max-w-5xl mx-auto px-8 md:px-4">
            <div className="overflow-x-auto rounded-md border border-slate-200">
                <table className="min-w-full divide-y divide-slate-200 text-left text-sm">
                        <thead className="bg-slate-50 text-xs font-semibold uppercase tracking-wide text-slate-600">
                            <tr>
                                <th scope="col" className="px-4 py-3">Monster</th>
                                <th scope="col" className="px-4 py-3">Time</th>
                                <th scope="col" className="px-4 py-3">Weapon</th>
                                <th scope="col" className="px-4 py-3">Rank</th>
                                <th scope="col" className="px-4 py-3 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="dive-y divide-slate-200 bg-white">
                            {hunts.map(hunt => (
                            <tr>
                                <td scope="col" className="px-4 py-3">{hunt.monster.monster}</td>
                                <td scope="col" className="px-4 py-3">{hunt.time_seconds}</td>
                                <td scope="col" className="px-4 py-3">{hunt.weapon_source_monster.monster}<br />{hunt.weapon.weapon}</td>
                                <td scope="col" className="px-4 py-3">{hunt.rank}</td>
                                <td scope="col" className="px-4 py-3 text-right"><button className="mt-2 ml-2 rounded border border-red-300 px-4 py-1 text-red-700">Delete</button></td>
                            </tr> 
                            ))
                            }
                        </tbody>
                </table>
            </div>
        </div>
        </>
    )
}


/**

<td class="whitespace-nowrap px-4 py-3 text-right">
    <button type="button" className="rounded border border-slate-300 px-3 py-1 text-slate-700 hover:bg-slate-50">Edit</button>
    <button type="button" className="ml-2 rounded border border-red-300 px-3 py-1 text-red-700 hover:bg-red-50">Delete</button>

 */