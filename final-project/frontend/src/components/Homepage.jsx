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

  function showMode () {
    if (mode === "list") {
  return <List items={items} />;
}

if (mode === "bar") {
  return <BarChartComponent items={items} />;
}
  }

  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <section className="rounded border border-slate-200 bg-white p-6">
        <h1 className="text-2xl font-semibold">Monster Hunter JP Data</h1>
        {username ? (
          <p className="mt-2 text-sm text-slate-500">Logged in as {username}</p>
        ) : null
        }

        <button 
          className="px-8 py-2 rounded-md mr-2 mb-5 mt-5 border border-black" 
          onClick={()=>setMode("list")}>List</button>
        <button 
          className="px-8 py-2 rounded-md mr-2 mb-5 mt-5 border border-black" 
          onClick={()=>setMode("bar")}>Bar</button>

        {showMode()}

      </section>
    </main>
  );
}
