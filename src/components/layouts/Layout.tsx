import React, { PropsWithChildren } from 'react';
import Head from 'next/head';

type Props = PropsWithChildren & {
  title?: string;
  description: string;
};

export default function Layout({ children, title = "", description }: Props) {
  const titleDisplayed = title ? `Slap Game - ${title}` : 'Slap Game';
  return (
    <>
      <Head>
        <title>{titleDisplayed}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='page'>
        {children}
      </main>
    </>
  );
};
