
import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function PixelPassportCardMaker() {
  return (
    <Layout
      title="Pixel Passport Card Maker"
      description="Create printable Pixel Passport cards"
    >
      <main style={{
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '20px'
      }}>

        {/* Navigation Buttons */}
        <div style={{
          display: 'flex',
          gap: '12px',
          flexWrap: 'wrap',
          marginBottom: '20px'
        }}>

          <Link
            to="/pixel-passport-editor"
            className="button button--secondary"
          >
            🎨 Pixel Passport Editor
          </Link>

          <Link
            to="/pixel-passport-card-maker"
            className="button button--primary"
          >
            🃏 Pixel Passport Card Maker
          </Link>

        </div>

        {/* Card Maker */}
        <iframe
          src="/pixel-passport/card-maker/index.html"
          title="Pixel Passport Card Maker"
          style={{
            width: '100%',
            height: '1500px',
            border: 'none',
            borderRadius: '12px'
          }}
        />

      </main>
    </Layout>
  );
}
