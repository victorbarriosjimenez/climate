import React from 'react';
import Typography from '../../components/Typography/Typography';
import Header from '../../components/Header/Header';
import styles from './Challenges.module.css';


export const Challenges = () => {
    return (
        <>
            <Header backToCampaignSite={true} />
            <div className="container">
                <Typography variant="title" as="h1">
                    AMÉRICA LATINA: DESAFÍOS Y PROGRESOS EN EL FINANCIAMIENTO
                </Typography>
                <p>
                    De acuerdo con el Foro Económico Mundial, asegurar un futuro
                    más resiliente debe ser nuestra prioridad ya que el cambio
                    climático es el desafío más grande al que se enfrenta la
                    humanidad y esta década será un momento decisivo para la
                    acción climática. Este mismo informe, señala que los riesgos
                    ambientales y climáticos, como los desastres naturales y la
                    falta de adaptación al cambio climático, son algunas de las
                    mayores amenazas para la estabilidad económica y social de
                    América Latina.
                </p>
                <Typography variant="subtitle" as="h2">
                    ALGUNOS DATOS SOBRE EL FINANCIAMIENTO CLIMÁTICO EN LA REGIÓN
                </Typography>
                <p>
                    De acuerdo con el{' '}
                    <a href="https://www.sustainablefinance4future.org/resultados-edici%C3%B3n-2022">
                        Índice de Finanzas Sostenibles 2022
                    </a>{' '}
                    realizado por el Grupo de Financiamiento Climático para
                    Latinoamérica y el Caribe, GFLAC, en donde se analizaron las
                    finanzas de 20 países de la región:
                </p>
                <ul className={styles.list}>
                    <li>
                        Ninguno de los países analizados cuenta con finanzas que
                        puedan ser consideradas bajas en carbono. Todos reciben
                        y gastan más dinero en industrias no sostenibles que en
                        enfrentar la crisis ambiental.
                    </li>
                    <li>
                        Los ingresos por hidrocarburos, minería y combustibles
                        sobrepasan por 10 veces al financiamiento internacional
                        dedicado al cambio climático.
                    </li>
                    <li>
                        Los presupuestos asignados a la explotación de
                        hidrocarburos sobrepasan por 39 veces a los presupuestos
                        etiquetados para la eficiencia energética, las energías
                        renovables y la atención de desastres.
                    </li>
                    <li>
                        Cuba es el único país que asignó más de 1 % de su
                        presupuesto público en actividades asociadas al cambio
                        climático.
                    </li>
                    <li>
                        Ecuador, México y Trinidad y Tobago son los países con
                        los niveles más altos de ingresos intensivos en carbono,
                        integrados por hidrocarburos, minería y combustibles.
                    </li>
                    <li>
                        Bolivia y México son los países con los mayores niveles
                        de presupuestos asignados a la explotación de
                        hidrocarburos.
                    </li>
                    <li>
                        Los países de Centroamérica presentan finanzas más
                        equilibradas en relación con otros países de la región.
                    </li>
                </ul>

                <Typography variant="subtitle" as="h2">
                    LA IMPORTANCIA DE LA COOPERACIÓN REGIONAL E INTERNACIONAL EN
                    LA GESTIÓN AMBIENTAL Y CLIMÁTICA
                </Typography>
                <p>
                    América Latina debe tomar medidas urgentes para abordar los
                    riesgos climáticos y ambientales y aumentar su resiliencia
                    frente a estos desafíos como:
                </p>
                <ul className={styles.list}>
                    <li>
                        Ninguno de los países analizados cuenta con finanzas que
                        puedan ser consideradas bajas en carbono. Todos reciben
                        y gastan más dinero en industrias no sostenibles que en
                        enfrentar la crisis ambiental.
                    </li>
                    <li>
                        Los ingresos por hidrocarburos, minería y combustibles
                        sobrepasan por 10 veces al financiamiento internacional
                        dedicado al cambio climático.
                    </li>
                    <li>
                        Los presupuestos asignados a la explotación de
                        hidrocarburos sobrepasan por 39 veces a los presupuestos
                        etiquetados para la eficiencia energética, las energías
                        renovables y la atención de desastres.
                    </li>
                    <li>
                        Cuba es el único país que asignó más de 1 % de su
                        presupuesto público en actividades asociadas al cambio
                        climático.
                    </li>
                    <li>
                        Ecuador, México y Trinidad y Tobago son los países con
                        los niveles más altos de ingresos intensivos en carbono,
                        integrados por hidrocarburos, minería y combustibles.
                    </li>
                    <li>
                        Bolivia y México son los países con los mayores niveles
                        de presupuestos asignados a la explotación de
                        hidrocarburos.
                    </li>
                    <li>
                        Los países de Centroamérica presentan finanzas más
                        equilibradas en relación con otros países de la región.
                    </li>
                </ul>
            </div>
        </>
    );
};
