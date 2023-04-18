import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebook,
    faTwitter,
    faInstagram,
} from '@fortawesome/free-brands-svg-icons';

import styles from './Footer.module.css';
import logo from '../../assets/logo.png';
import Typography from '../Typography/Typography';

function Footer() {
    return (
        <footer className={styles.footer}>
            <nav className={styles.nav}>
                <div className={styles.logo}>
                    <a href="https://www.climatereality.lat/">
                        <img src={logo} alt="Campaign Logo" />
                    </a>
                </div>
                <div className={styles.rightSection}>
                    <a
                        className={styles.latamLink}
                        href="/que-es-america-latina-unida"
                    >
                        <Typography align="center" as="h3">
                            America Latina Unida
                        </Typography>
                    </a>
                    <div>
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
                        <div>
                            <div>
                                <Typography>
                                    Suscríbete a nuestra gaceta climática
                                </Typography>
                                <button className={styles.button}>
                                    Suscribirme
                                </button>
                            </div>
                            <Typography>
                                ¡Únete a nuestra comunidad digital!
                            </Typography>
                        </div>
                    </div>
                </div>
            </nav>
        </footer>
    );
}

export default Footer;
