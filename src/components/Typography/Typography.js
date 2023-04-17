import React from 'react';
import PropTypes from 'prop-types';

function Typography({ variant, children, as: Element = 'p', className }) {
  const font =
    variant === 'h1'
        ? 'Brandon Grotesque Bold'
        : variant === 'h2'
        ? 'Brandon Grotesque Bold'
        : variant === 'h3'
        ? 'Brandon Grotesque Medium'
        : variant === 'h4'
        ? 'Brandon Grotesque Medium'
        : variant === 'h5'
        ? 'Brandon Grotesque Regular'
        : variant === 'h6'
        ? 'Brandon Grotesque Regular'
        : 'Merriweather Regular';

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
                : variant === 'body'
                ? '1rem'
                : '1rem',
        fontWeight: variant === 'body' ? '400' : 'normal',
        lineHeight: variant === 'body' ? '1.5' : 'inherit',
    };

    return <Element style={styles} className={className}>{children}</Element>;
}

Typography.propTypes = {
    variant: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'body']),
    children: PropTypes.node.isRequired,
    as: PropTypes.string,
    className: PropTypes.string
};

Typography.defaultProps = {
    variant: 'body',
};


export default Typography;
