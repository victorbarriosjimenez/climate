import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Button.module.css';

const Button = ({ children, variant, className, ...props }) => {
    const buttonClassNames = classNames(
        styles.button,
        {
            [styles.primary]: variant === 'primary',
            [styles.secondary]: variant === 'secondary',
            [styles.tertiary]: variant === 'tertiary',
        },
        className
    );

    return (
        <button className={buttonClassNames} {...props}>
            {children}
        </button>
    );
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    variant: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
    className: PropTypes.string,
};

Button.defaultProps = {
    variant: 'primary',
    className: '',
};

export default Button;
