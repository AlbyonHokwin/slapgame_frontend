import React, { useEffect } from 'react';
import Link from 'next/link';
import Layout from '../layouts/Layout';
import socket from '@/utils/socket';

export default function Home() {
  useEffect(() => {
    socket.disconnect();
  }, []);

  return (
    <Layout description='Come play to slap game !'>
      <div className='page gap-4'>
        <h1 className='text-xl'>Slap game</h1>
        <Link className='btn' href='createGame'>
          Créer partie
        </Link>
        <Link className='btn' href='joinGame'>
          Rejoindre partie
        </Link>
      </div>
    </Layout>
  );
};
