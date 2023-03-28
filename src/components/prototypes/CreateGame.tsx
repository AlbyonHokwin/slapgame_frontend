import { useRouter } from 'next/router';
import React, { useState } from 'react';
import Layout from '../layouts/Layout';

export default function CreateGame() {
  const [username, setUsername] = useState<string>('');
  const router = useRouter();

  const handleClickOnCreateGame = () => {
    router.push('/lobby');
  }

  return (
    <Layout title='New game' description='Create a new slap game'>
      <div className='page gap-4'>
        <input
          type='text'
          placeholder='Enter your username'
          onChange={e => setUsername(e.target.value)}
          value={username} />
        <button className='btn' onClick={handleClickOnCreateGame}>Créer partie</button>
      </div>
    </Layout>
  );
};
