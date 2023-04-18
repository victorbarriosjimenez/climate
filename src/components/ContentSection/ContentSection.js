import React from 'react';
import PropTypes from 'prop-types';

import styles from './Content.module.css';

function ContentSection({ title, children, image, contentDirection }) {
  const isLeftDirection = contentDirection === 'left';

  return (
      <section className={styles.container}>
          <div
              className={`${styles.content} ${
                  isLeftDirection ? styles.contentLeft : styles.contentRight
              }`}
          >
              {children}
          </div>
          <img
              className={styles.image}
              src={image}
              alt={title}
          />
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
