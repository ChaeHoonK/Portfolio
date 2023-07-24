// components/CookieConsent.js

import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import styles from './CookieConsent.module.css';  // Import the CSS module

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);

  const acceptCookies = () => {
    Cookies.set('CookieConsent', 'true', { expires: 365 });
    setShowBanner(false);
  };

  useEffect(() => {
    if (!Cookies.get('CookieConsent')) {
      setShowBanner(true);
    }
  }, []);

  if (!showBanner) {
    return null;
  }

  return (
    <div className={styles.banner}>
      <p className={styles.text}>
        We use cookies to improve your experience. 
        By using our site, you agree to our use of cookies.
      </p>
      <button className={styles.button} onClick={acceptCookies}>Accept Cookies</button>
    </div>
  );
};

export default CookieConsent;
