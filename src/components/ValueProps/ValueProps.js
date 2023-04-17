import React from 'react';
import PropTypes from 'prop-types';
import styles from './valueprops.module.css';

const ValueProps = ({ propsData }) => {
    return (
        <div className={styles.propsContainer}>
            {propsData.map((prop, index) => (
                <a href={prop.link} key={index} className={styles.link}>
                    <div className={styles.prop}>
                        <img
                            src={prop.imgSrc}
                            alt={prop.title}
                            className={styles.image}
                        />
                        <strong>
                            {prop.title}
                        </strong>
                        <p className="">
                            {prop.subtitle}
                        </p>
                    </div>
                </a>
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
            link: PropTypes.string,
        })
    ).isRequired,
};

export default ValueProps;
