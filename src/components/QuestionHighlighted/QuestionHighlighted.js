import React from 'react';
import PropTypes from 'prop-types';
import Typography from '../Typography/Typography';
import styles from './Question.module.css';

function QuestionHighlighted({ title, subtitle, imageSrc, imageAlt }) {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <Typography variant="h3" as="h1">{title}</Typography>
        <Typography variant="h4" as="p" className={styles.subtitle}>
          {subtitle}
        </Typography>
      </div>
      <img src={imageSrc} alt={imageAlt} className={styles.image} />
    </div>
  );
}

QuestionHighlighted.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
};

export default QuestionHighlighted;
