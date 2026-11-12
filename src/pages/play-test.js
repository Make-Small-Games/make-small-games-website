
import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function PlayTest() {
  return (
    <Layout
      title="Example Game"
      description="Play an example game made with MakeCode Arcade."
    >
      <main
        style={{
          minHeight: '70vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          padding: '40px 20px',
          background: '#f5f1ff',
        }}
      >
        <h1
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: 'clamp(36px, 5vw, 56px)',
            fontWeight: 900,
            color: '#101b4c',
          }}
        >
          GAME COMING SOON!
        </h1>

        <p
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: '20px',
            color: '#283367',
            maxWidth: '550px',
            marginBottom: '30px',
          }}
        >
          We're getting a playable game ready for you!
          Check back soon to try it out.
        </p>

        <Link
          to="/"
          className="button button--primary button--lg"
        >
          Back to Home
        </Link>
      </main>
    </Layout>
  );
}
