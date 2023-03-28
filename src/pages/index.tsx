import Head from 'next/head'
import { io, Socket } from 'socket.io-client'

export default function Home() {
  // const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:3000';
  // const socket: Socket = io(backendUrl, { autoConnect: false });

  return (
    <>
      <Head>
        <title>Slap Game</title>
        <meta name="description" content="Come play to slap game !" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='w-full h-full bg-blue flex flex-col justify-center items-center gap-4'>
        <h1 className='text-xl'>Slap game</h1>
        <button className='btn'>Créer partie</button>
        <button className='btn'>Rejoindre partie</button>
      </main>
    </>
  )
}
