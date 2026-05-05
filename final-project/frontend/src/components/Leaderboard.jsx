import React, { useState, useEffect } from "react";
import { getToken, getUsername } from "../tokenStorage.js";

export default function Leaderboard({ game }) {
  console.log(game);

  const [hunts, setHunts] = useState([]);
  const [mode, setMode] = useState("leaderboard");
  const [time_seconds, setTime] = useState(null);
  const [weapon, setWeapon] = useState(null);
  const [wsm, setWsm] = useState(null);
  const [monster, setMonster] = useState(null);
  const [rank, setRank] = useState(null);

  const baseURL = import.meta.env.VITE_API_BASE_URL;

  async function getItems() {
    const response = await fetch(`${baseURL}/api/hunts?game=${game.id}`);
    const data = await response.json();
    setHunts(data);
    console.log(data);
  }

  useEffect(() => {
    getItems();
  }, []);

  async function cHunt() {
    //cHunt = create hunt
    const endpoint = `${baseURL}/api/hunts/`;

    const huntData = {
      time_seconds: time_seconds,
      weapon: weapon,
      weapon_source_monster: wsm,
      monster: monster,
      rank: rank,
      game: game.id,
    };

    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + getToken(),
      },
      body: JSON.stringify(huntData),
    });
    const data = await response.text();
    console.log(data);
    setMode("leaderboard");
    getItems();
  }

  async function dHunt(h_id) {
    //dHunt = delete hunt
    const endpoint = `${baseURL}/api/hunts/${h_id}`;

    const response = await fetch(endpoint, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + getToken(),
      },
    });
    const data = await response.text();
    console.log(data);
    getItems();
  }

  if (mode === "Add") {
    return (
      <div className="max-w-5xl mx-auto px-8 md:px-4">
        <div className="space-y-3 rounded border border-slate-200 bg-white p-4">
          <h2 className="text-xl font-semibold">Add Hunt</h2>
          <input
            className="w-full rounded border border-slate-300 px-2 py-1.5"
            placeholder="Monster"
            value={monster}
            onChange={(e) => setMonster(Number(e.target.value))}
          />
          <input
            className="w-full rounded border border-slate-300 px-2 py-1.5"
            placeholder="Time"
            value={time_seconds}
            onChange={(e) => setTime(Number(e.target.value))}
          />
          <div className="grid grid-cols-2 gap-2">
            <input
              className="w-full rounded border border-slate-300 px-2 py-1.5"
              placeholder="Material"
              value={monster}
              onChange={(e) => setWsm(Number(e.target.value))}
            />
            <input
              className="w-full rounded border border-slate-300 px-2 py-1.5"
              placeholder="Weapon"
              value={weapon}
              onChange={(e) => setWeapon(Number(e.target.value))}
            />
          </div>
          <select
            className="w-full rounded border border-slate-300 px-2 py-1.5"
            required
            value={rank}
            onChange={(e) => setRank(e.target.value)}
          >
            <option value="-1">Select Rank</option>
            <option value="Low">Low</option>
            <option value="High">High</option>
            <option value="G">G</option>
          </select>
          <div className="flex gap-2">
            <button
              className="rounded bg-slate-800 px-4 py-1 text-sm text-white disabled:opacity-50"
              onClick={cHunt}
            >
              Save
            </button>
            <button
              className="rounded border border-slate-300 px-4 py-1 text-sm"
              onClick={() => setMode("leaderboard")}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (mode === "leaderboard") {
    return (
      <>
        <div className="flex flex-col md:flex-row justify-between mt-8 gap-4">
          <p className="mb-5">{game.title} Leaderboard</p>
          <button
            className="rounded bg-slate-800 px-6 py-2 text font-medium text-white mb-5"
            onClick={() => setMode("Add")}
          >
            Add New
          </button>
        </div>
        <div className="max-w-5xl mx-auto px-8 md:px-4">
          <div className="overflow-x-auto rounded-md border border-slate-200">
            <table className="min-w-full divide-y divide-slate-200 text-left text-sm">
              <thead className="bg-slate-50 text-xs font-semibold uppercase tracking-wide text-slate-600">
                <tr>
                  <th scope="col" className="px-4 py-3">
                    Monster
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Time
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Weapon
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Rank
                  </th>
                  <th scope="col" className="px-4 py-3 text-right">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="dive-y divide-slate-200 bg-white">
                {hunts.map((hunt) => (
                  <tr>
                    <td scope="col" className="px-4 py-3">
                      {hunt.monster.monster}
                    </td>
                    <td scope="col" className="px-4 py-3">
                      {hunt.time_seconds}
                    </td>
                    <td scope="col" className="px-4 py-3">
                      {hunt.weapon_source_monster.monster}
                      <br />
                      {hunt.weapon.weapon}
                    </td>
                    <td scope="col" className="px-4 py-3">
                      {hunt.rank}
                    </td>
                    <td scope="col" className="px-4 py-3 text-right">
                      {getUsername() === hunt.owner.username ? (
                        <button
                          className="mt-2 ml-2 rounded border border-red-300 px-4 py-1 text-red-700"
                          onClick={() => dHunt(hunt.id)}
                        >
                          Delete
                        </button>
                      ) : (
                        ""
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
  }
}

/**

<td class="whitespace-nowrap px-4 py-3 text-right">
    <button type="button" className="rounded border border-slate-300 px-3 py-1 text-slate-700 hover:bg-slate-50">Edit</button>
    <button type="button" className="ml-2 rounded border border-red-300 px-3 py-1 text-red-700 hover:bg-red-50">Delete</button>

 */
