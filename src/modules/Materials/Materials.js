import React from 'react';
import Typography from '../../components/Typography/Typography';
import ValueProps from '../../components/ValueProps/ValueProps';
import styles from './Materials.module.css';
import cinve from '../../assets/cinve.png';
import finanzas from '../../assets/finanzas.png';
import millones from '../../assets/100_millones.png';
import elefante from '../../assets/elefante.png';
import financiamiento from '../../assets/financiamiento.png';
import rutaFondos from '../../assets/ruta-fondos.png';

const propsData = [
    {
        imgSrc: finanzas,
        link: 'https://www.sustainablefinance4future.org/_files/ugd/32948d_b226aaa66acb4459b61ef19f6520b243.pdf?index=true',
        title: 'Indice de Finanzas Sostenibles 2022',
        subtitle: 'GFLAC',
    },
    {
        link: 'https://cinve.org.uy/wp-content/uploads/2022/08/Documento-de-Trabajo-03_2022-CINVE.pdf',
        imgSrc: cinve,
        title: 'Desafíos y Oportunidades del Financiamiento Climático en América Latina y el Caribe.',
        subtitle: 'Centro de Investigaciones Económicas',
    },
    {
        imgSrc: rutaFondos,
        link: 'https://www.avina.net/la-ruta-de-los-fondos-climaticos-internacionales-en-america-latina/',
        title: 'La ruta de los fondos climáticos internacionales en América Latina',
        subtitle: 'Fundación AVINA',
    },
    {
        imgSrc: millones,
        link: 'https://www.instagram.com/p/Ckws1S8pgG2/',
        title: '100.000 millones de dólares para salvar el planeta',
        subtitle: 'Climate Reality América Latina',
    },
    {
        imgSrc: elefante,
        link: 'https://www.instagram.com/p/Ckt-UWsJ4Af/',
        title: 'La ruta de los fondos climáticos internacionales en América Latina',
        subtitle: 'Climate Reality América Latina',
    },
    {
        link: 'https://www.climatereality.lat/cop27/financiamiento-climatico-cerrando-la-brecha-para-financiar-el-desarrollo-sostenible/',
        imgSrc: financiamiento,
        title: 'Desafíos y Oportunidades del Financiamiento Climático en América Latina y el Caribe.',
        subtitle: 'Climate Reality América Latina',
    },
];

const Materials = () => {
    return (
        <section className={styles.container}>
            <Typography variant="title" as="h2" align="center">
                Materiales para entender de financiamiento climático en América
                Latina
            </Typography>
            <Typography variant="subtitle" as="h4">
                #InvierteEnElPlaneta
            </Typography>
            <ValueProps propsData={propsData} />
        </section>
    );
};

export default Materials;
