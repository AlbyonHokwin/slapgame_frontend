import React, { useEffect, useState } from 'react'
import Layout from '../layouts/Layout'
import { useAppDispatch } from '@/hooks/reduxHooks';
import { useRouter } from 'next/router';
import { addUsername } from '@/reducers/user';
import socket from '@/utils/socket';
import Input from '../elements/Input';
import Button from '../elements/Button';

const JoinGame = () => {
  const [username, setUsername] = useState<string>('');
  const [roomId, setRoomId] = useState<string>('');
  const router = useRouter();
  const dispatch = useAppDispatch();

  useEffect(() => {
    socket.disconnect();
  }, []);

  const handleClickOnJoinGame = () => {
    if (username && roomId) {
      socket.auth = { username, roomId };
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
          label='Enter your username'
          hideLabel
          name='username'
          type='text'
          placeholder='Enter your username'
          onChange={e => setUsername(e.target.value)}
          value={username} />

        <Input
          label='Enter room ID'
          hideLabel
          name='room id'
          type='text'
          placeholder='Enter room ID'
          onChange={e => setRoomId(e.target.value)}
          value={roomId} />

        <Button onClick={handleClickOnJoinGame}>Rejoindre partie</Button>
      </div>
    </Layout>
  );
};

export default JoinGame;