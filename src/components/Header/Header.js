import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebook,
    faTwitter,
    faInstagram,
} from '@fortawesome/free-brands-svg-icons';

import styles from './header.module.css';
import logo from '../../assets/logo.png';

import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <div className="container">
                <nav className={styles.nav}>
                    <div className={styles.logo}>
                        <Link to="/">
                            <img src={logo} alt="Campaign Logo" />
                        </Link>
                    </div>
                    <div className={styles.rightSection}>
                        <Link to="/que-es-america-latina-unida">
                            America Latina Unida
                        </Link>
                        <ul className={styles.socialLinks}>
                            <li>
                                <a
                                    href="https://www.instagram.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FontAwesomeIcon
                                        icon={faInstagram}
                                        size="2x"
                                    />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.facebook.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FontAwesomeIcon
                                        icon={faFacebook}
                                        size="2x"
                                    />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://twitter.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FontAwesomeIcon
                                        icon={faTwitter}
                                        size="2x"
                                    />
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Header;
