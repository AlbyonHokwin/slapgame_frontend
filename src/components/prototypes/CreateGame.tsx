import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useAppDispatch } from '@/hooks/reduxHooks';
import { addUsername } from '@/reducers/user';
import Layout from '../layouts/Layout';
import socket from '@/utils/socket';

export default function CreateGame() {
  const [username, setUsername] = useState<string>('');
  const router = useRouter();
  const dispatch = useAppDispatch();

  useEffect(() => {
    socket.disconnect();
  }, []);

  const handleClickOnCreateGame = () => {
    if (username) {
      socket.auth = { username };
      socket.connect();

      socket.on('connect', () => {
        dispatch(addUsername(username));
        router.push('/lobby');
      });

      socket.on('moveToLobby', (...args) => {
        console.log('moving', args);
      });

      socket.on('connect_error', () => {
        alert('Error occured, please try again');
      });
    }
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
