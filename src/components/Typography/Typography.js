import React from 'react';
import styles from './Typography.module.css'
const Typography = ({ as = 'p', variant = '', align = '', className = '', children }) => {
  const Tag = as;
  let fontClass = '';
  let colorClass = '';

  switch (variant) {
    case 'h1':
    case 'h2':
    case 'h3':
    case 'h4':
    case 'h5':
    case 'h6':
      fontClass = 'Typography__font-brandon';
      colorClass = 'Typography__color-green';
      break;
    case 'subtitle':
      fontClass = 'Typography__font-brandon';
      colorClass = 'Typography__color-blue';
      variant = 'h4';
      break;
    default:
      fontClass = 'Typography__font-merriweather';
      break;
  }

  return (
    <Tag className={`Typography ${variant} ${align} ${className} ${fontClass} ${colorClass}`}>
      {children}
    </Tag>
  );
};

export default Typography;
