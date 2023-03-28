import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { io, Socket } from 'socket.io-client'

export default function Home() {
  console.log(process.env.NEXT_PUBLIC_BACKEND_URL);
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:3000';
  const socket: Socket = io(backendUrl, { autoConnect: false });
  // socket.disconnect();

  // fetch('http://localhost:3000/').then(response => console.log('ok', response.ok));

  return (
    <>
      <Head>
        <title>Slap Game</title>
        <meta name="description" content="Come play to slap game !" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>

      </main>
    </>
  )
}
