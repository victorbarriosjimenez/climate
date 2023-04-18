import React from 'react';
import PropTypes from 'prop-types';
import styles from './Valueprops.module.css';

const ValueProps = ({ propsData }) => {
    return (
        <div className={styles.propsContainer}>
            {propsData.map((prop, index) => (
                <div className={styles.link}>
                    <a target="_blank"  href={prop.link} key={index}>
                        <div className={styles.prop}>
                            <img
                                src={prop.imgSrc}
                                alt={prop.title}
                                className={styles.image}
                            />
                            <strong>"{prop.title}"</strong>
                        </div>
                    </a>
                    <p>{prop.subtitle}</p>
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
            link: PropTypes.string,
        })
    ).isRequired,
};

export default ValueProps;
