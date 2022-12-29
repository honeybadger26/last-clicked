import { useState } from "react";

const API = process.env.api;

export async function getServerSideProps() {
    const res = await fetch(`${API.server}/get`);
    const data = await res.json();

    return { props: { initialDate: data.date } };
}

export default function Home({ initialDate }) {
    const [date, setDate] = useState(initialDate);

    async function updateDate() {
        const res = await fetch(`${API.client}/set`, { method: "POST" });
        const data = await res.json();

        setDate(data.date);
    }

    return (
        <div>
            { date && <p>Last clicked: {date}</p> }
            <button onClick={() => updateDate()}>
                You won't click me. You're too scared.
            </button>
        </div>
    );
}
