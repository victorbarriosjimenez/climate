import React from 'react';
import PropTypes from 'prop-types';
import Typography from '../Typography/Typography';
import styles from './Question.module.css';
import Button from '../../components/Button/Button';
import { Link } from 'react-router-dom';

function QuestionHighlighted({ title, subtitle, imageSrc, imageAlt, showText = false }) {
  return (
      <div className={styles.container}>
          <div className={styles.textContainer}>
              <Typography variant="h3" as="h1">
                  {title}
              </Typography>
              <Typography variant="h4" as="p" className={styles.subtitle}>
                  {subtitle}
              </Typography>
          </div>
          <img src={imageSrc} alt={imageAlt} className={styles.image} />
          {showText && (
              <>
                  <p className={styles.textCenter}>
                      <strong>En América Latina</strong> las problemáticas
                      ambientales que atraviesan nuestros países son muy
                      similares y una de las más importantes son las
                      limitaciones financieras para poder implementar políticas
                      de mitigación y adaptación al cambio climático. Enpocas
                      palabras, nuestra región no recibe suficiente
                      financiamiento.
                  </p>
                  <strong>
                      Al participar en esta manifestación, te unes a un
                      movimiento masivo por la justicia climática en América
                      Latina.
                  </strong>
                  <p>
                      Queremos ver billetes de toda la región intervenidos con
                      el fin de elevar al debate público la necesidad de
                      invertir para lograr acceso a tecnologías limpias,
                      aumentar la eficiencia energética, impulsar mejores
                      sistemas de transporte, fortalecer la adaptación al cambio
                      climático, reducir la deforestación y mejorar la gestión
                      de los recursos naturales en nuestro territorio.
                  </p>
              </>
          )}
          {showText && (
              <Link to="/america-latina-desafios-y-progresos-en-el-financiamiento">
                  <Button variant="secondary" className={styles.cta}>
                      Leer más
                  </Button>
              </Link>
          )}
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
