import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebook,
    faTwitter,
    faInstagram,
} from '@fortawesome/free-brands-svg-icons';

import styles from './header.module.css';
import logo from '../../assets/logo.png';

function Header() {
    return (
        <header>
            <nav className={styles.nav}>
                <div className={styles.logo}>
                    <a href="/">
                        <img src={logo} alt="Campaign Logo" />
                    </a>
                </div>
                <div className={styles.rightSection}>
                    <a href="/" className={styles.unityText}>America Latina Unida</a>
                    <ul className={styles.socialLinks}>
                        <li>
                            <a
                                href="https://www.instagram.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FontAwesomeIcon icon={faInstagram} size="2x" />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.facebook.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FontAwesomeIcon icon={faFacebook} size="2x" />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://twitter.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FontAwesomeIcon icon={faTwitter} size="2x" />
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Header;
