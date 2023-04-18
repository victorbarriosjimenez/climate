import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faInstagram,
    faTwitter,
    faFacebook,
} from '@fortawesome/free-brands-svg-icons';
import styles from './Campaign.module.css';
import image from '../../assets/10.png';

const CampaignInstructions = ({ instructions }) => {
    const [currentInstruction, setCurrentInstruction] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentInstruction((currentInstruction) => {
                if (currentInstruction === instructions.length - 1) {
                    return 0;
                } else {
                    return currentInstruction + 1;
                }
            });
        }, 3000);

        return () => clearInterval(interval);
    }, [instructions.length]);

    return (
        <section className={styles.campaignInstructions}>
            <div className={styles.imageContainer}>
                <img
                    src={image}
                    alt="Billetes por la vida"
                    className={styles.image}
                />
                <div className={styles.social}>
                    <p className={styles.socialLegend}>
                        ¡Sigue la campaña en nuestras redes sociales!
                    </p>
                    <div className={styles.linksContainer}>
                        <a
                            href="https://www.instagram.com/climatelatino/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.icon}
                        >
                            <FontAwesomeIcon icon={faInstagram} color="black" />
                        </a>
                        <a
                            href="https://twitter.com/ClimateLatino"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.icon}
                        >
                            <FontAwesomeIcon icon={faTwitter} color="black" />
                        </a>
                        <a
                            href="https://www.facebook.com/ClimateLatino/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.icon}
                        >
                            <FontAwesomeIcon icon={faFacebook} color="black" />
                        </a>
                    </div>
                </div>
            </div>
            <div className={styles.instructionsContainer}>
                <div className={styles.list}>
                    <ul>
                        {instructions.map((instruction, index) => (
                            <li
                                key={index}
                                className={
                                    index === currentInstruction
                                        ? styles.active
                                        : ''
                                }
                            >
                                <div className={styles.instruction}>
                                    <p className={styles.title}>
                                        <span className={styles.number}>
                                            {index + 1}.
                                        </span>
                                        <strong>
                                        {instruction.title}
                                        </strong>
                                    </p>
                                    <p className={styles.subtitle}> {instruction.subtitle}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

CampaignInstructions.propTypes = {
    instructions: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            subtitle: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default CampaignInstructions;
