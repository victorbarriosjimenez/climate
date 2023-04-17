import React from 'react';
import styles from './hero.module.css';
import Typography from '../Typography/Typography';
import image from '../../assets/5.png';

const Hero = () => {
    return (
        <div className={styles.hero}>
            <div className={styles.text}>
                <Typography as="h1" variant="h1" className={styles.title}>
                    Invierte en el Planeta
                </Typography>
                <Typography
                    as="h2"
                    variant="subtitle1"
                    className={styles.subtitle}
                >
                    Intervención masiva #BilletesPorLaVida
                </Typography>
                <Typography as="p" variant="body1" className={styles.text}>
                    Este Día de la Tierra, participa en la intervención masiva
                    de billetes con el poderoso llamado a la acción “Invierte en
                    el Planeta” #BilletesPorLaVida. Un mensaje que nos invita a
                    destinar nuestro tiempo, recursos y energía para enfrentar y
                    vencer la crisis climática en todas sus dimensiones y desde
                    todos los niveles.
                </Typography>
            </div>
            <div className={styles.image}>
                <img src={image} alt="hero" aria-hidden="true" />
            </div>
        </div>
    );
};

export default Hero;