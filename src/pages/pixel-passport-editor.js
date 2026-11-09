
import React, { useEffect, useRef } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function PixelPassportEditor() {
  const iframeRef = useRef(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    let observer;

    function resizeIframe() {
      const doc = iframe.contentDocument;
      if (!doc) return;

      const app = doc.querySelector('.app');
      if (!app) return;

      const height = Math.ceil(
        app.getBoundingClientRect().bottom + 12
      );

      iframe.style.height = `${height}px`;
    }

    function handleLoad() {
      if (observer) observer.disconnect();

      const doc = iframe.contentDocument;
      const app = doc?.querySelector('.app');
      if (!app) return;

      resizeIframe();

      observer = new ResizeObserver(resizeIframe);
      observer.observe(app);
    }

    iframe.addEventListener('load', handleLoad);
    window.addEventListener('resize', resizeIframe);

    if (iframe.contentDocument?.readyState === 'complete') {
      handleLoad();
    }

    return () => {
      iframe.removeEventListener('load', handleLoad);
      window.removeEventListener('resize', resizeIframe);
      if (observer) observer.disconnect();
    };
  }, []);

  return (
    <Layout
      title="Pixel Passport Monster Creator"
      description="Create your own Pixel Passport monster"
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
            className="button button--primary"
          >
            🎨 Pixel Passport Editor
          </Link>

          <Link
            to="/pixel-passport-card-maker"
            className="button button--secondary"
          >
            🃏 Pixel Passport Card Maker
          </Link>

        </div>

        {/* Automatically Resizing Monster Creator */}
        <iframe
          ref={iframeRef}
          src="/nfc-monster-maker.html"
          title="Pixel Passport Monster Creator"
          scrolling="no"
          style={{
            width: '100%',
            height: '600px',
            border: 'none',
            borderRadius: '12px',
            overflow: 'hidden',
            display: 'block'
          }}
        />

      </main>
    </Layout>
  );
}
