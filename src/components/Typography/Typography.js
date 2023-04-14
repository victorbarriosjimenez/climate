import React from 'react';
import PropTypes from 'prop-types';

function Typography({ variant, children, as: Element = 'p' }) {
    const font =
        variant === 'h1'
            ? 'brandon-grotesque-bold'
            : variant === 'h2'
            ? 'brandon-grotesque-bold'
            : variant === 'h3'
            ? 'brandon-grotesque-medium'
            : variant === 'h4'
            ? 'brandon-grotesque-medium'
            : variant === 'h5'
            ? 'brandon-grotesque-regular'
            : variant === 'h6'
            ? 'brandon-grotesque-regular'
            : 'merriweather-regular';

    const styles = {
        fontFamily: `"${font}", sans-serif`,
        margin: 0,
        fontSize:
            variant === 'h1'
                ? '3.052rem'
                : variant === 'h2'
                ? '2.441rem'
                : variant === 'h3'
                ? '1.953rem'
                : variant === 'h4'
                ? '1.563rem'
                : variant === 'h5'
                ? '1.25rem'
                : variant === 'h6'
                ? '1rem'
                : '1rem',
    };

    return <Element style={styles}>{children}</Element>;
}

Typography.propTypes = {
    variant: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p']),
    children: PropTypes.node.isRequired,
    as: PropTypes.string,
};

Typography.defaultProps = {
    variant: 'p',
};


export default Typography;
