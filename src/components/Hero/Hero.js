import React from 'react';
import styles from './Hero.module.css';
import Typography from '../Typography/Typography';
import Button from '../Button/Button';
import image from '../../assets/5.png';

const Hero = () => {
    return (
        <>
            <div className={styles.hero}>
                <div className={styles.text}>
                    <Typography as="h1" variant="h1" className={styles.titleHero}>
                        Invierte en el Planeta
                    </Typography>
                    <Typography
                        variant="subtitle"
                        className={styles.subtitleHero}
                    >
                        Intervención masiva #BilletesPorLaVida
                    </Typography>
                    <Typography>
                        Este Día de la Tierra, participa en la intervención
                        masiva de billetes con el poderoso llamado a la acción
                        “Invierte en el Planeta” #BilletesPorLaVida. Un mensaje
                        que nos invita a destinar nuestro tiempo, recursos y
                        energía para enfrentar y vencer la crisis climática en
                        todas sus dimensiones y desde todos los niveles.
                    </Typography>
                    <a
                        target="_blank"
                        href="https://drive.google.com/drive/folders/1z7hbgUXucsvG_723STa7LkYfPOhCrTce?usp=sharing"
                    >
                        <Button variant="primary" className={styles.download}>
                            Descarga el toolkit de la campaña
                        </Button>
                    </a>
                </div>
                <div className={styles.image}>
                    <img src={image} alt="hero" aria-hidden="true" />
                </div>
            </div>
            <div className={styles.paragraphContainer}>
                <div className="paragraphs">
                    <p>
                        Este 22 de abril, en Climate Reality América Latina, nos
                        unimos a la icónica y potente campaña del Día de la
                        Tierra, una celebración que, año tras año, convoca a
                        personas, empresas y gobiernos de todos los ámbitos para
                        unirse en un esfuerzo colectivo y audaz en pro de la
                        sostenibilidad y la acción climática. Este año, la
                        temática que inspira la campaña a nivel mundial es
                        "Invierte en el Planeta" y desde nuestras oficinas de
                        América Latina lanzamos el llamado para que toda la
                        región se una a la demostración masiva
                        #BilletesPorLaVida porque tenemos la fiel convicción de
                        que la mejor inversión de todas, es invertir en nuestro
                        planeta.
                    </p>
                    <p style={{ breakBefore: 'column' }}>
                        <strong style={{ textAlign: 'center' }}>
                            ¡Que los recursos de todo el mundo sirvan a la vida!
                        </strong>
                        <br></br>
                        <br></br>
                        <strong>“Invierte en el Planeta”</strong>, es un mensaje
                        para movilizar recursos financieros a la acción
                        climática pero también es una misiva para recordar que
                        podemos destinar nuestro tiempo y nuestras acciones a
                        favor del planeta.
                        <br></br>
                        <br></br>
                        <strong>
                            Este es un llamado a todos los niveles: empresas,
                            gobiernos, organizaciones y cualquiera de nosotros
                            ¡podemos hacer que los recursos sirvan a la vida!
                        </strong>
                    </p>
                </div>
            </div>
        </>
    );
};

export default Hero;