import { useState } from 'react';
import dynamic from 'next/dynamic';

import Button from '../components/Button';

const LastClickedText = dynamic(
  () => import('../components/LastClickedText'),
  { ssr: false }
);

const API = process.browser ? process.env.api.client : process.env.api.server;

export async function getServerSideProps() {
  const res = await fetch(`${API}/get`);
  const data = await res.json();
  return { props: { initialDate: data.date } };
};


export default function HomePage({ initialDate }: { initialDate: null | string}) {
  const [date, setDate] = useState(initialDate);
  const [loading, setLoading] = useState(false);
  
  async function handleClick() {
    setLoading(true);

    await fetch(`${API}/set`, { method: 'POST' });

    const res = await fetch(`${API}/get`);
    const data = await res.json();

    setDate(data.date);
    setLoading(false);
  }

  return (
    <div className="p-5 flex h-screen">
      <div className="m-auto text-center">
        <LastClickedText loading={loading} date={date} />
        <Button loading={loading} onClick={handleClick} />
      </div>
    </div>
  );
};
  