import React from 'react';
import CampaignInstructions from '../../components/CampaignInstructions/CampaignInstructions';
import Typography from '../../components/Typography/Typography';
import styles from './campaign.module.css';

const Campaign = () => {
    const instructions = [
        {
            title: 'Marca un billete',
            subtitle:
                'Escoge un billete de baja denominación y márcalo con el mensaje "Invierte en el Planeta" junto al hashtag #BilletesPorLaVida. Deja volar tu imaginación y sé parte de este potente llamado a la acción.',
        },
        {
            title: 'Comparte tu creación en redes sociales',
            subtitle:
                'Captura una foto de tu billete personalizado y compártela en tus redes sociales. Nos encantaría ver participación de toda América Latina. Etiquétanos en @ClimateLatino en Instagram, Twitter y Facebook, y cuéntanos por qué crees que es vital invertir en nuestro planeta.',
        },
        {
            title: 'Deja que el mensaje circule e inspira a otros a participar.',
            subtitle:
                'Pon en circulación tu billete para que el mensaje llegue más lejos y motiva a tus seres queridos, compañeros de estudio o trabajo, y organizaciones a unirse a esta iniciativa.',
        },
        {
            title: 'Explora los recursos de este sitio y conoce más sobre financiamiento climático.',
            subtitle:
                'Explora los recursos que recopilamos para ti y conoce más sobre la importancia del financiamiento climático en nuestra región de América Latina y otras formas en las que puedes invertir tu tiempo, recursos y energía por nuestro planeta.',
        },
    ];

    return (
        <section className={styles.section}>
            <CampaignInstructions instructions={instructions} />
        </section>
    );
};

export default Campaign;