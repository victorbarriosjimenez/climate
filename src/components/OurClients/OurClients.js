import React from 'react';
import PropTypes from 'prop-types';
import styles from './Ourclients.module.css';
import Typography from '../Typography/Typography';

function OurClients({ title, clients }) {
  return (
    <div className={styles.container}>
      <Typography variant="h2" as="h3">
        {title}
      </Typography>
      <div className={styles.logoContainer}>
        {clients.map((client, index) => (
          <a
            href={client.link}
            key={index}
            className={styles.clientLogoContainer}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Logo del cliente ${client.alt}`}
          >
            <img
              src={client.image}
              alt={`Logo del cliente ${client.alt}`}
              className={styles.clientLogo}
            />
          </a>
        ))}
      </div>
    </div>
  );
}

OurClients.propTypes = {
  title: PropTypes.string.isRequired,
  clients: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default OurClients;
