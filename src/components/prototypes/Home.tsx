import React from 'react';
import Link from 'next/link';
import Layout from '../layouts/Layout';

export default function Home() {
  return (
    <Layout title='Slap Game' description='Come play to slap game !'>
      <div className='page gap-4'>
        <h1 className='text-xl'>Slap game</h1>
        <Link className='btn' href='createGame'>
          Créer partie
        </Link>
        <button className='btn'>Rejoindre partie</button>
      </div>
    </Layout>
  );
};
