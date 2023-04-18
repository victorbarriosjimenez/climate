import React, { useState } from 'react';
import styles from './investments.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import ContentSection from '../../components/ContentSection/ContentSection';

import solutions from '../../assets/9.png';
import power from '../../assets/8.png';
import time from '../../assets/7.png';

const investmentsData = [
    {
      title: 'Invierte tiempo',
      contentDirection: 'left',
      image: time,
      children: (
        <ul>
          <li>Organiza o participa en eventos de limpieza y reforestación con tu comunidad.</li>
          <li>Reduce el desperdicio de alimentos planificando tus compras y menús semanales.</li>
          <li>Gestiona tus correos electrónicos de manera eficiente para ahorrar energía.</li>
          <li>Infórmate sobre las políticas climáticas de candidatos políticos y los compromisos climáticos de tu país.</li>
          <li>Conoce las Contribuciones Determinadas a Nivel Nacional y otros compromisos que haya hecho tu país en términos climáticos.</li>
        </ul>
      ),
    },
    {
      title: 'Usa tu poder de decisión',
      contentDirection: 'right',
      image: power,
      children: (
        <ul>
          <li>Disminuye el consumo de carne e incorpora opciones veganas o basadas en plantas a tu dieta.</li>
          <li>Prefiere productos locales y evita la importación de alimentos.</li>
          <li>Elige productos que cumplan con normas y estándares de sostenibilidad y sean socialmente responsables.</li>
          <li>Reduce el uso de plásticos de un solo uso y opta por materiales reusables y biodegradables.</li>
          <li>Utiliza medios de transporte sostenibles: camina, usa bicicleta, transporte público o comparte el auto.</li>
          <li>Repara, intercambia o compra ropa de segunda mano.</li>
        </ul>
      ),
    },
    {
      title: 'Invierte en soluciones sustentables',
      contentDirection: 'left',
      image: solutions,
      children: (
        <ul>
          <li>Implementa energías renovables en tu hogar u oficina.</li>
          <li>Opta por recibos digitales para reducir el consumo de papel.</li>
          <li>Transforma tus residuos orgánicos en abono mediante el compostaje.</li>
          <li>Apoya iniciativas y negocios locales con enfoques sustentables.</li>
          <li>Participa en voluntariado o donaciones para huertos urbanos y proyectos ecológicos en tu comunidad.</li>
        </ul>
      ),
    },
  ];




  function Investments() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevClick = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? investmentsData.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === investmentsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  const contentSections = investmentsData.map((investment, index) => (
    <ContentSection
      key={index}
      title={investment.title}
      contentDirection={investment.contentDirection}
      image={investment.image}
      vertical={index === activeIndex}
    >
      {investment.children}
    </ContentSection>
  ));

  const dots = investmentsData.map((investment, index) => (
    <span
      key={index}
      className={`${styles.dot} ${activeIndex === index ? styles.active : ''}`}
      onClick={() => handleDotClick(index)}
    />
  ));

  return (
    <div className={styles.container}>
      <div className={styles.desktop}>
        {contentSections}
        <div className={styles.arrowContainer}>
          <FontAwesomeIcon
            icon={faChevronLeft}
            className={styles.arrowLeft}
            onClick={handlePrevClick}
          />
          <FontAwesomeIcon
            icon={faChevronRight}
            className={styles.arrowRight}
            onClick={handleNextClick}
          />
        </div>
        <div className={styles.dots}>{dots}</div>
      </div>
      <div className={styles.mobile}>
        {contentSections[activeIndex]}
        <div className={styles.arrowContainer}>
          <FontAwesomeIcon
            icon={faChevronLeft}
            className={styles.arrowLeft}
            onClick={handlePrevClick}
          />
          <FontAwesomeIcon
            icon={faChevronRight}
            className={styles.arrowRight}
            onClick={handleNextClick}
          />
        </div>
        <div className={styles.dots}>{dots}</div>
      </div>
      <button className={styles.cta}>Conoce más acciones individuales aquí</button>
    </div>
  );
}

export default Investments;