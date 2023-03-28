import React from 'react';
import Lobby from '@/components/prototypes/Lobby';

type Props = {
  username: string;
}

export default function LobbyPage({ username }: Props) {
  return (
    <Lobby username={username} />
  );
};
