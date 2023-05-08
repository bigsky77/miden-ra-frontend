import React from 'react';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <style>{`
          body {
            margin: 0;
            background-image: url('/background.png');
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            background-attachment: fixed;
          }
        `}</style>
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        </div>
      </main>
    </>
  );
}

