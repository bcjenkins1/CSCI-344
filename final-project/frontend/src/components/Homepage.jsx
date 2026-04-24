import React, {useState, useEffect} from "react";
import BarChartComponent from "./BarChart";
import List from "./List";

export default function Homepage({ username }) {

  const [mode, setMode] = useState("list");
  
  const [items, setItems] = useState([]);
  const baseURL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    async function getItems() {
      const response = await fetch(`${baseURL}/api/games`);
      const data = await response.json();
      setItems(data);
      console.log(data);
    }

    getItems();
  }, []);

  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <section className="rounded border border-slate-200 bg-white p-6">
        <h1 className="text-2xl font-semibold">Monster Hunter JP Data</h1>
        {username ? (
          <p className="mt-2 text-sm text-slate-500">Logged in as {username}</p>
        ) : null
        }

        <List items={items}/>
        <BarChartComponent items={items}/>

      </section>
    </main>
  );
}
