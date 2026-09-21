import React, { useEffect } from 'react';

export default function PlayTest() {
  useEffect(() => {
    let animationFrame;

    function keepRendering() {
      document.body.style.transform = 'translateZ(0)';
      animationFrame = requestAnimationFrame(keepRendering);
    }

    animationFrame = requestAnimationFrame(keepRendering);

    return () => {
      cancelAnimationFrame(animationFrame);
      document.body.style.transform = '';
    };
  }, []);

  return (
    <main
      style={{
        width: '100vw',
        height: '100vh',
        margin: 0,
        padding: 0,
        overflow: 'hidden',
      }}
    >
      <iframe
        src="https://arcade.makecode.com/---run?id=S29293-83382-41772-36976"
        style={{
          width: '100%',
          height: '100%',
          border: '0',
        }}
        allowFullScreen
      />
    </main>
  );
}