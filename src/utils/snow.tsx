/* Snow effect script adapted from 'https://app.embed.im/snow.js' */

import React, { useEffect } from 'react';

const SnowEffect: React.FC = () => {
  useEffect(() => {
    // Function to generate the snow effect
    const generateSnow = () => {
      let snowContainer = document.getElementById('embedim--snow');
      if (snowContainer) return;

      const embRand = (a: number, b: number): number =>
        Math.floor(Math.random() * (b - a + 1)) + a;

      let embCSS = `
        .embedim-snow {
          position: absolute;
          width: 10px;
          height: 10px;
          background: white;
          border-radius: 50%;
          margin-top: -10px;
        }
      `;
      let embHTML = '';

      for (let i = 1; i < 200; i++) {
        embHTML += '<i class="embedim-snow"></i>';
        const rndX = embRand(0, 1000000) * 0.0001;
        const rndO = embRand(-100000, 100000) * 0.0001;
        const rndT = (embRand(3, 8) * 10).toFixed(2);
        const rndS = (embRand(0, 10000) * 0.0001).toFixed(2);

        embCSS += `
          .embedim-snow:nth-child(${i}) {
            opacity: ${(embRand(1, 10000) * 0.0001).toFixed(2)};
            transform: translate(${rndX.toFixed(2)}vw, -10px) scale(${rndS});
            animation: fall-${i} ${embRand(10, 30)}s -${embRand(0, 30)}s linear infinite;
          }
          @keyframes fall-${i} {
            ${rndT}% {
              transform: translate(${(rndX + rndO).toFixed(2)}vw, ${rndT}vh) scale(${rndS});
            }
            to {
              transform: translate(${(rndX + rndO / 2).toFixed(2)}vw, 105vh) scale(${rndS});
            }
          }
        `;
      }

      snowContainer = document.createElement('div');
      snowContainer.id = 'embedim--snow';
      snowContainer.innerHTML = `
        <style>
          #embedim--snow {
            position: fixed;
            left: 0;
            top: 0;
            bottom: 0;
            width: 100vw;
            height: 100vh;
            overflow: hidden;
            z-index: 9999999;
            pointer-events: none;
          }
          ${embCSS}
        </style>
        ${embHTML}
      `;
      document.body.appendChild(snowContainer);
    };

    // Add the snow effect when the component mounts
    generateSnow();

    // Cleanup the snow effect when the component unmounts
    return () => {
      const snowContainer = document.getElementById('embedim--snow');
      if (snowContainer) {
        snowContainer.remove();
      }
    };
  }, []);

  return null;
};

export default SnowEffect;
