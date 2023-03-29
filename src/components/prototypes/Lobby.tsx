import React from 'react';
import { useAppSelector } from '@/hooks/reduxHooks';
import Layout from '../layouts/Layout';
import { io, Socket } from 'socket.io-client';

export default function Lobby() {
  const username = useAppSelector(state => state.user.username);

  // const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:3000';
  // const socket: Socket = io(backendUrl, { autoConnect: false });

  const description: string = 'We\'re waiting for players'
  return (
    <Layout title='Lobby' description={description}>
      <div className='page gap-4'>
        Lobby of {username}
      </div>
    </Layout>
  );
};
