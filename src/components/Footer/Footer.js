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
import Button from '../Button/Button';
import { Link } from 'react-router-dom';


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
                    <div className={styles.sectionLinks}>
                        <a
                            className={styles.latamLink}
                            href="/que-es-america-latina-unida"
                        >
                            <Typography align="center" as="h3">
                                America Latina Unida
                            </Typography>
                        </a>
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
                    <div className={styles.subscribe}>
                        <div>
                            <Typography as="p">
                                <strong>
                                    Suscríbete a nuestra gaceta climática
                                </strong>
                            </Typography>
                            <Link to="http://eepurl.com/hy2v3H">
                                <Button
                                    variant="primary"
                                    className={styles.download}
                                >
                                    Suscribirme
                                </Button>
                            </Link>
                        </div>
                        <Typography>
                            ¡Únete a nuestra comunidad digital!
                        </Typography>
                    </div>
                </div>
            </nav>
        </footer>
    );
}

export default Footer;
