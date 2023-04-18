import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebook,
    faTwitter,
    faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import Typography from '../Typography/Typography';

import styles from './Header.module.css';
import logo from '../../assets/logo.png';

function Header({ backToCampaignSite = false}) {
    return (
        <header>
            <div className="container">
                <nav className={styles.nav}>
                    <div className={styles.logo}>
                        <a
                            href={
                                backToCampaignSite
                                    ? '/'
                                    : 'https://www.climatereality.lat/}'
                            }
                        >
                            <img src={logo} alt="Campaign Logo" />
                        </a>
                    </div>
                    <div className={styles.rightSection}>
                        <a className={styles.latamLink} href="/que-es-america-latina-unida">
                            <Typography align='center' as='h3'>America Latina Unida</Typography>
                        </a>
                        <ul className={styles.socialLinks}>
                            <li>
                                <a
                                    href="https://www.instagram.com/climatelatino/"
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
                                    href="https://www.facebook.com/ClimateLatino"
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
                                    href="https://twitter.com/ClimateLatino"
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
