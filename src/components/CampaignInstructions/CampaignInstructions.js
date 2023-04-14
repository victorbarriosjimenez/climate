import React, { useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faInstagram,
    faTwitter,
    faFacebook,
} from '@fortawesome/free-brands-svg-icons';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import styles from './campaign.module.css';
import Typography from '../Typography/Typography';

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
            <div className={styles.left}>
                <img
                    src="/images/campaign-instructions.jpg"
                    alt="Billetes por la vida"
                    className={styles.image}
                />
                <div className={styles.social}>
                    <a
                        href="https://twitter.com/ClimateLatino"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.icon}
                    >
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a
                        href="https://www.facebook.com/ClimateLatino/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.icon}
                    >
                        <FontAwesomeIcon icon={faFacebook} />
                    </a>
                    <a
                        href="https://www.instagram.com/climatelatino/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.icon}
                    >
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                </div>
            </div>
            <div className={styles.right}>
                <div className={styles.header}>
                    <Typography variant="h2">
                        ¿Listo para movilizarte?
                    </Typography>
                    <Typography variant="subtitle1">
                        Únete a #BilletesPorLaVida y marca una diferencia.
                    </Typography>
                </div>
                <div className={styles.list}>
                    <ol>
                        {instructions.map((instruction, index) => (
                            <li
                                key={index}
                                className={
                                    index === currentInstruction
                                        ? styles.active
                                        : ''
                                }
                            >
                                <div className={styles.number}>
                                    <FontAwesomeIcon icon={faCircle} />
                                    <Typography variant="h3">
                                        {index + 1}.
                                    </Typography>
                                </div>
                                <Typography
                                    variant="body1"
                                    className={styles.instruction}
                                >
                                    {instruction}
                                </Typography>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        </section>
    );
};

CampaignInstructions.propTypes = {
    instructions: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default CampaignInstructions;
