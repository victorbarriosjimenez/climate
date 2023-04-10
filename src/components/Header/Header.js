import React from 'react';
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <nav>
        <div className={styles.logo}>
          <a href="/">
            <img src="logo.png" alt="Campaign Logo" />
          </a>
        </div>
        <ul className={styles.navLinks}>
          {/* Secciones extra */}
        </ul>
        <div className={styles.rightSection}>
          <div className={styles.unityText}>America Latina Unida</div>
          <ul className={styles.socialLinks}>
            <li><a href="#"><i className="fab fa-instagram"></i></a></li>
            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
            <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
          </ul>
        </div>
      </nav>
    </header>)
}

export default Header;