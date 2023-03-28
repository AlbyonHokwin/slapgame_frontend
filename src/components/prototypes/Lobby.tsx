import React from 'react';
import Layout from '../layouts/Layout';

type Props = {
  username: string;
}

export default function Lobby({ username }: Props) {
  const description: string = 'We\'re waiting for players'
  return (
    <Layout title='Lobby' description={description}>
      <div className='page gap-4'>
        Lobby of {username}
      </div>
    </Layout>
  );
};
