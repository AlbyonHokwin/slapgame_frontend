import React, { useEffect } from 'react';
import Link from 'next/link';
import Layout from '../layouts/Layout';
import Button from '../elements/Button';
import socket from '@/utils/socket';
import { useRouter } from 'next/router';
import { cleanUrl } from '@/utils/router';

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    cleanUrl(router);
    socket.disconnect();
  }, []);

  return (
    <Layout description='Come play to slap game !'>
      <div className='page gap-4'>
        <h1 className='text-xl'>Slap game</h1>
        <Button onClick={() => router.push('createGame')}>
          Créer partie
        </Button>
        <Button onClick={() => router.push('joinGame')}>
          Rejoindre partie
        </Button>
      </div>
    </Layout>
  );
};

export default Home;