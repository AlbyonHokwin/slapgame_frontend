import Head from 'next/head';
import Link from 'next/link';
import Home from '@/components/prototypes/Home';
import { io, Socket } from 'socket.io-client';

export default function HomePage() {
  // const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:3000';
  // const socket: Socket = io(backendUrl, { autoConnect: false });

  return (
    <Home />
  );
};