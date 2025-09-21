// /components/Icon.js
'use client';

import React from 'react';
import PropTypes from 'prop-types';

/**
 * Icon component (small set)
 * props:
 *  - name: 'twitter' | 'linkedin' | 'facebook' | 'instagram' | 'github'
 *  - size: number (px)
 *  - className: extra classes
 */
export default function Icon({ name, size = 18, className = '' }) {
  const common = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', 'aria-hidden': true };

  switch (name) {
    case 'twitter':
      return (
        <svg {...common} className={className}>
          <path d="M23 4.5c-.8.4-1.6.6-2.5.8.9-.5 1.6-1.3 1.9-2.3-.9.6-1.9 1-3 1.3C18 3 16.8 2.5 15.5 2.5c-2.6 0-4.6 2.4-4 5C7.7 7.2 4.7 5.5 2.8 3c-.9 1.6-.5 3.6.9 4.6-.7 0-1.4-.2-2-.6 0 2.2 1.6 4 3.6 4.4-.6.2-1.1.2-1.7.1.5 1.6 2 2.6 3.7 2.6C7.7 17 5 17.8 2.6 18.1c1.6 1 3.6 1.6 5.6 1.6 6.6 0 10.2-5.8 10.2-10.8v-.5c.8-.6 1.5-1.3 2-2.1-.7.3-1.4.5-2.1.6z" stroke="currentColor" strokeWidth="0" />
        </svg>
      );

    case 'linkedin':
      return (
        <svg {...common} className={className}>
          <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.48 1s2.5 1.12 2.5 2.5zM0 8h5v16H0zM8 8h4.7v2.2h.1c.7-1.2 2.4-2.5 4.9-2.5 5.3 0 6.3 3.5 6.3 8V24h-5v-7.3c0-1.7 0-3.9-2.4-3.9-2.4 0-2.8 1.9-2.8 3.8V24H8z" fill="currentColor" />
        </svg>
      );

    case 'facebook':
      return (
        <svg {...common} className={className}>
          <path d="M22 12.1C22 6.48 17.52 2 11.9 2S1.8 6.48 1.8 12.1c0 4.9 3.56 8.97 8.2 9.78v-6.93H8.2v-2.85h1.82V9.4c0-1.8 1.07-2.8 2.69-2.8.78 0 1.6.14 1.6.14v1.76h-.9c-.89 0-1.17.56-1.17 1.14v1.37h2l-.32 2.85h-1.68V21.9c4.64-.82 8.2-4.88 8.2-9.8z" fill="currentColor" />
        </svg>
      );

    case 'github':
      return (
        <svg {...common} className={className}>
          <path d="M12 .5C5.65.5.5 5.66.5 12.02c0 5.12 3.32 9.46 7.94 10.99.58.1.8-.25.8-.56 0-.28-.01-1.02-.01-2-3.23.7-3.91-1.56-3.91-1.56-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.77 2.72 1.26 3.38.96.11-.75.41-1.26.74-1.55-2.58-.29-5.29-1.29-5.29-5.74 0-1.27.45-2.31 1.2-3.13-.12-.3-.52-1.5.11-3.13 0 0 .98-.31 3.2 1.2.93-.26 1.93-.39 2.92-.39.99 0 1.99.13 2.92.39 2.2-1.51 3.18-1.2 3.18-1.2.63 1.63.24 2.83.12 3.13.75.82 1.2 1.86 1.2 3.13 0 4.46-2.72 5.45-5.31 5.73.42.36.8 1.08.8 2.18 0 1.58-.01 2.86-.01 3.25 0 .31.21.67.81.56C20.68 21.47 24 17.12 24 12.02 24 5.66 18.84.5 12 .5z" fill="currentColor" />
        </svg>
      );

    default:
      return null;
  }
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number,
  className: PropTypes.string,
};
