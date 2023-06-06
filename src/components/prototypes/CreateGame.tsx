import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useAppDispatch } from '@/hooks/reduxHooks';
import { addUsername } from '@/reducers/user';
import Layout from '../layouts/Layout';
import socket from '@/utils/socket';
import Button from '../elements/Button';
import Input from '../elements/Input';

const CreateGame = () => {
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
      });

      socket.on('moveToLobby', (roomId) => {
        router.push('/lobby', { query: { roomId } });
      });
    }
  }

  return (
    <Layout title='New game' description='Create a new slap game'>
      <div className='page gap-4'>
        <Input
          name='username'
          type='text'
          placeholder='Enter your username'
          onChange={e => setUsername(e.target.value)}
          value={username}
        />
        <Button onClick={handleClickOnCreateGame}>Créer partie</Button>
      </div>
    </Layout>
  );
};

export default CreateGame;