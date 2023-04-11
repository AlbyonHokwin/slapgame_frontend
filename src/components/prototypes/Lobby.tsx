import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useAppSelector } from '@/hooks/reduxHooks';
import socket from '@/utils/socket';
import Layout from '../layouts/Layout';

export default function Lobby() {
  const username = useAppSelector(state => state.user.username);
  const router = useRouter();

  useEffect(() => {
    if (!username) router.push('/');

    socket.on('player:new', playerUsername => {
      console.log('new player:', playerUsername);
    })
  }, [])

  const description: string = 'We\'re waiting for players'
  return (
    <Layout title='Lobby' description={description}>
      <div className='page gap-4'>
        Lobby of {username}
        <button onClick={() => socket.emit('test')}>test</button>
      </div>
    </Layout>
  );
};
