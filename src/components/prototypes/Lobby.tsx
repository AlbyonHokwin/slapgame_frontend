import React from 'react';
import Layout from '../layouts/Layout';
import { io, Socket } from 'socket.io-client';

type Props = {
  username: string;
}

export default function Lobby({ username }: Props) {
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
