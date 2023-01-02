import { useState } from "react";

const API = process.env.api;

export async function getServerSideProps() {
  const res = await fetch(`${API.server}/get`);
  const data = await res.json();

  return { props: { initialDate: data.date } };
}

export default function({ initialDate }) {
  const [date, setDate] = useState(initialDate);
  
  async function handleClick() {
    const res = await fetch(`${API.client}/set`, { method: "POST" });
    const data = await res.json();

    setDate(data.date);
  }
  
  return (
    <div className="p-5">
      { date && <p className="pb-3 font-mono">Last clicked: {date}</p> }
      <button
        className="text-3xl p-3 font-sans rounded-lg text-slate-50 bg-blue-600 hover:bg-blue-500 active:bg-blue-400"
        onClick={handleClick}
      >
        You won't click me. You're too scared
      </button>
    </div>
  );
}
  