import React, {useState, useEffect} from "react";

export default function Leaderboard({game}) {
    console.log(game);

    return(
        //<p>Leaderboard goes here {game.title}</p>
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
                        </tbody>
                </table>
            </div>
        </div>
    )
}


/**

<td class="whitespace-nowrap px-4 py-3 text-right">
    <button type="button" className="rounded border border-slate-300 px-3 py-1 text-slate-700 hover:bg-slate-50">Edit</button>
    <button type="button" className="ml-2 rounded border border-red-300 px-3 py-1 text-red-700 hover:bg-red-50">Delete</button>

 */