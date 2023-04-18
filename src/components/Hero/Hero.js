import React from 'react';
import styles from './Hero.module.css';
import Typography from '../Typography/Typography';
import Button from '../Button/Button';
import image from '../../assets/5.png';

const Hero = () => {
    return (
        <div className={styles.hero}>
            <div className={styles.text}>
                <Typography as="h1" variant="h1" className={styles.title}>
                    Invierte en el Planeta
                </Typography>
                <Typography variant="subtitle" className={styles.subtitleHero}>
                    Intervención masiva #BilletesPorLaVida
                </Typography>
                <Typography>
                    Este Día de la Tierra, participa en la intervención masiva
                    de billetes con el poderoso llamado a la acción “Invierte en
                    el Planeta” #BilletesPorLaVida. Un mensaje que nos invita a
                    destinar nuestro tiempo, recursos y energía para enfrentar y
                    vencer la crisis climática en todas sus dimensiones y desde
                    todos los niveles.
                </Typography>
                <a target='_blank' href="https://drive.google.com/drive/folders/1z7hbgUXucsvG_723STa7LkYfPOhCrTce?usp=sharing">
                    <Button variant="primary" className={styles.download}>
                        Descarga el toolkit de la campaña
                    </Button>
                </a>
            </div>
            <div className={styles.image}>
                <img src={image} alt="hero" aria-hidden="true" />
            </div>
        </div>
    );
};

export default Hero;