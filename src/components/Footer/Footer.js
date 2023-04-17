import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebook,
    faTwitter,
    faInstagram,
} from '@fortawesome/free-brands-svg-icons';

import styles from './footer.module.css';
import logo from '../../assets/logo.png';

function Footer() {
    return (
        <footer className={styles.footer}>
            <nav className={styles.nav}>
                <div className={styles.logo}>
                    <a href="/">
                        <img src={logo} alt="Campaign Logo" />
                    </a>
                </div>
                <div className={styles.rightSection}>
                    <a href="/" className={styles.unityText}>
                        America Latina Unida
                    </a>
                    <div>
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
                      <div>
                          <div className={styles.container}>
                              <p>Suscríbete a nuestra gaceta climática</p>
                              <button className={styles.button}>
                                  Suscribirme
                              </button>
                          </div>
                          <p className={styles.joinText}>
                              ¡Únete a nuestra comunidad digital!
                          </p>
                      </div>
                    </div>
                </div>
            </nav>
        </footer>
    );
}

export default Footer;
