import React from 'react';
import styles from './Typography.module.css';

const Typography = ({
    variant = 'body',
    align = 'left',
    as: Component = 'p',
    children,
    className,
}) => {
    let classes = [styles[variant], styles[align], className];
    if (
        Component === 'h1' ||
        Component === 'h2' ||
        Component === 'h3' ||
        Component === 'h4' ||
        Component === 'h5' ||
        Component === 'h6'
    ) {
        classes.push(styles.title);
    } else if (variant === 'subtitle') {
        classes.push(styles.subtitle);
    } else {
        classes.push(styles.paragraph);
    }
    return <Component className={classes.join(' ')}>{children}</Component>;
};

export default Typography;
