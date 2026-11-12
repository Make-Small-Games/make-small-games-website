
import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { FaDiscord, FaYoutube, FaFacebook } from 'react-icons/fa';
import styles from './styles.module.css';

// Add your social media links here.
const socialLinks = [
  {
    name: 'Discord',
    url: '', // Paste your Discord invite link
    Icon: FaDiscord,
  },
  {
    name: 'YouTube',
    url: '', // Add when ready
    Icon: FaYoutube,
  },
  {
    name: 'Facebook',
    url: '', // Add when ready
    Icon: FaFacebook,
  },
];

export default function Footer() {
  const logoUrl = useBaseUrl('/img/reaper-logo.png');

  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>

        <div className={styles.footerBrand}>
          <Link to="/" className={styles.footerLogo}>
            <img src={logoUrl} alt="Make Small Games logo" />
          </Link>

          <div className={styles.brandText}>
            <Link to="/" className={styles.brandName}>
              Make Small Games
            </Link>
            <p>Small Games. Big Possibilities.</p>
          </div>
        </div>

        <div className={styles.footerRight}>
          <div className={styles.socialLinks}>
            {socialLinks.map(({name, url, Icon}) =>
              url ? (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  title={name}
                  className={styles.socialLink}
                >
                  <Icon />
                </a>
              ) : (
                <span
                  key={name}
                  className={styles.socialDisabled}
                  title={`${name} link coming soon`}
                  aria-label={`${name} coming soon`}
                >
                  <Icon />
                </span>
              )
            )}
          </div>

          <nav
            className={styles.footerLinks}
            aria-label="Footer navigation"
          >
            <Link to="/classes">Classes</Link>
            <Link to="/workshops">Workshops</Link>
            <Link to="/docs/general">Resources</Link>
            <Link to="/about">About</Link>
          </nav>
        </div>

      </div>

      <div className={styles.footerBottom}>
        <p>
          © {new Date().getFullYear()} Make Small Games.
          All rights reserved.
        </p>
      </div>
    </footer>
  );
}
