import React from 'react';
import PropTypes from 'prop-types';
import Typography from '../Typography/Typography';

import styles from './content.module.css';

function ContentSection({ title, children, image, contentDirection }) {
  const isLeftDirection = contentDirection === 'left';

  return (
    <section className={styles.container}>
      <div
        className={`${styles.content} ${
          isLeftDirection ? styles.contentLeft : styles.contentRight
        }`}
      >
        <Typography variant="h3" className={styles.title}>
          {title}
        </Typography>
        {children}
      </div>
      <img className={`${styles.imageContainer} ${isLeftDirection ? styles.imageContainerRight : styles.imageContainerLeft}`} src={image} alt="" className={styles.image} />
    </section>
  );
}

ContentSection.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  image: PropTypes.string.isRequired,
  contentDirection: PropTypes.oneOf(['left', 'right']).isRequired,
};

export default ContentSection;
