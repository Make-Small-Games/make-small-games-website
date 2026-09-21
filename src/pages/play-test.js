import React from 'react';

export default function PlayTest() {
  return (
    <>
      <style>{`
        body {
          margin: 0;
          overflow: hidden;
        }

        .game-frame {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: calc(100vh - 60px);
          border: 0;
        }

        .test-banner {
          position: fixed;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 60px;

          display: flex;
          align-items: center;
          justify-content: center;

          background: #222;
          color: white;
          font-size: 18px;
          font-weight: bold;

          overflow: hidden;
        }

        .moving-thing {
          position: absolute;
          font-size: 28px;
          animation: moveAcross 2s linear infinite;
        }

        @keyframes moveAcross {
          from {
            transform: translateX(-45vw);
          }

          to {
            transform: translateX(45vw);
          }
        }
      `}</style>

      <iframe
        className="game-frame"
        src="https://arcade.makecode.com/---run?id=S29293-83382-41772-36976"
        allowFullScreen
      />

      <div className="test-banner">
        <span>MAKE SMALL GAMES</span>
        <div className="moving-thing">👻</div>
      </div>
    </>
  );
}