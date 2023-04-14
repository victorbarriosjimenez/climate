import React from 'react';
import Typography from '../../components/Typography/Typography';
import ValueProps from '../../components/ValueProps/ValueProps';
import styles from './materials.module.css';

const propsData = [
    {
        imageUrl: 'path/to/image1',
        title: '"Indice de Finanzas Sostenibles 2022"',
        subtitle: 'Grupo de Financiamiento Climático para Latinoamérica y el Caribe, GFLAC',
    },
    {
        imageUrl: 'path/to/image2',
        title: 'Título 2',
        subtitle: 'Subtítulo 2',
    },
    {
        imageUrl: 'path/to/image3',
        title: 'Título 3',
        subtitle: 'Subtítulo 3',
    },
];

const Materials = () => {
    return (
        <section className={styles.container}>
            <Typography variant="h2" className={styles.title}>
                Materiales para entender de financiamiento climático en América
                Latina
            </Typography>
            <Typography variant="subtitle1" className={styles.subtitle}>
                #InvierteEnElPlaneta
            </Typography>
            <ValueProps propsData={propsData} />
        </section>
    );
};

export default Materials;
