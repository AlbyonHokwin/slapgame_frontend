import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useAppSelector } from '@/hooks/reduxHooks';
import socket from '@/utils/socket';
import Layout from '../layouts/Layout';
import Button from '../elements/Button';

const Lobby = () => {
  const username = useAppSelector(state => state.user.username);
  const router = useRouter();

  useEffect(() => {
    if (!username || socket.disconnected) router.push('/');

    socket.on('player:new', playerUsername => {
      console.log('new player:', playerUsername);
    })
  }, [])

  const description: string = 'We\'re waiting for players'
  return (
    <Layout title='Lobby' description={description}>
      <div className='page gap-4'>
        Lobby of {username}
        <Button onClick={() => socket.emit('test')}>test</Button>
      </div>
    </Layout>
  );
};

export default Lobby;