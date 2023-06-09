import React from 'react';
import Typography from '../../components/Typography/Typography';
import Header from '../../components/Header/Header';
import styles from './Latinamerica.module.css';

export const LatinAmerica = () => {
    return (
        <div>
            <Header backToCampaignSite={true} />
            <div className="container">
                <Typography variant="h1" as="h1">
                    ¿Qué es América Latina Unida?
                </Typography>
                <Typography variant="subtitle" as="h2">
                    Una nueva narrativa para nuestra región
                </Typography>
                <div className={styles.paragraph}>
                    <p>
                        América Latina se enfrenta a una crisis climática sin
                        precedentes. La selva amazónica se desvanece, las
                        montañas de los Andes pierden sus glaciares y las costas
                        son azotadas por tormentas cada vez más intensas.
                        Habitamos una región del mundo megadiversa pero con
                        muchas problemáticas ambientales comunes. ¿Por qué no
                        hacerle frente a estas problemáticas en conjunto y con
                        las soluciones que ya existen en la región? Este año, en
                        Climate Reality América Latina estamos impulsando un
                        cambio de narrativa para que nuestra región sea vista
                        como un semillero de soluciones y no solamente como una
                        zona vulnerada por los embates del cambio climático.
                        Nuestra riqueza natural y ubicación geográfica pueden
                        hacer de América Latina la gran protagonista en la
                        creación de soluciones sostenibles.
                    </p>
                    <p style={{ breakBefore: 'column' }}>
                        Los líderes y comunidades de la región reconocen que
                        solo trabajando en conjunto pueden enfrentar los
                        desafíos que les presenta el cambio climático. Este
                        movimiento busca fomentar la colaboración, la unidad y
                        un sentido de responsabilidad compartida entre los
                        países latinoamericanos por la acción climática y la
                        justicia.
                    </p>
                    <p>
                        Nuestra nueva narrativa “América Latina Unida” es el
                        hilo conductor de nuestros programas, campañas y
                        esfuerzos con el objetivo de conocernos, reconocernos y
                        conectar como región por la acción climática. Desde
                        Operación COP: Juventudes Embajadoras Por El Clima,
                        hasta nuestro trabajo con comunidades, nuestro objetivo
                        es crear una América Latina Unida.
                    </p>
                </div>
                <Typography variant="subtitle" as="h2">
                    América Latina Unida por el clima
                </Typography>
                <div className={styles.paragraph}>
                    <p>
                        Juntos, nuestros países pueden desarrollar estrategias
                        de adaptación innovadoras y soluciones basadas en la
                        naturaleza, fortaleciendo la resiliencia de la región
                        frente a eventos climáticos extremos, escasez de agua y
                        otros desafíos ambientales. Además de compartir
                        conocimientos y recursos para aprender unos de otros y
                        apoyarse mutuamente en la transición hacia un futuro
                        sostenible.
                    </p>
                    <p>
                        América Latina Unida pone un énfasis especial en la
                        inclusión y el empoderamiento de las poblaciones
                        vulnerables, como mujeres, comunidades indígenas y
                        poblaciones rurales. Estos grupos, que tradicionalmente
                        han sido marginados, ahora son agentes de cambio activos
                        en sus comunidades y contribuyen a la formulación de
                        soluciones climáticas adaptadas a sus realidades.
                        Juntos, nuestros países pueden desarrollar estrategias
                        de adaptación innovadoras y soluciones basadas en la
                        naturaleza, fortaleciendo la resiliencia de la región
                        frente a eventos climáticos extremos, escasez de agua y
                        otros desafíos ambientales.
                    </p>
                    <p style={{ breakBefore: 'column' }}>
                        Además, la movilización de financiamiento y el
                        involucramiento del sector privado en la acción
                        climática se vuelven cruciales. Juntos, los países
                        latinoamericanos y las empresas comprometidas pueden
                        impulsar la implementación de políticas y proyectos que
                        aceleren la transición hacia una economía sostenible y
                        baja en carbono.
                    </p>
                    <p>
                        Nuestro objetivo es hacer crecer la narrativa de América
                        Latina Unida hasta que la región se convierta en un
                        ejemplo inspirador de cómo la unidad y la cooperación
                        pueden transformar la lucha contra el cambio climático y
                        proteger el futuro de sus habitantes y ecosistemas. Los
                        países latinoamericanos pueden maximizar su impacto y
                        cambiar el curso de la historia en favor de un futuro
                        más sostenible y próspero.
                    </p>
                </div>
            </div>
        </div>
    );
}   