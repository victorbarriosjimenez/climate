import React from 'react';
import PropTypes from 'prop-types';
import styles from './valueprops.module.css';
import Typography from '../Typography/Typography';

const ValueProps = ({ propsData }) => {
    return (
        <div className={styles.propsContainer}>
            {propsData.map((prop, index) => (
                <div className={styles.prop} key={index}>
                    <img
                        src={prop.imgSrc}
                        alt={prop.title}
                        className={styles.image}
                    />
                    <Typography variant="subtitle1" className={styles.title}>
                        {prop.title}
                    </Typography>
                    <Typography variant="body1" className={styles.subtitle}>
                        {prop.subtitle}
                    </Typography>
                </div>
            ))}
        </div>
    );
};

ValueProps.propTypes = {
    propsData: PropTypes.arrayOf(
        PropTypes.shape({
            imgSrc: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            subtitle: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default ValueProps;
