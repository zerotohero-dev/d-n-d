/*
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

const Square = ( { dark, highlight, accepts, children } ) => (
    <div className={`square ${highlight ? 'highlight' : ( accepts ? 'accepting' : ( dark ? 'dark' : 'light' ) ) }`} >
        {children}
    </div>
);

Square.defaultProps = {
    dark: false,
    higlight: false
};

Square.propTypes = {
    dark: PropTypes.bool,
    highlight: PropTypes.bool,
    accepts: PropTypes.bool,
    children: PropTypes.element
};

export default Square;
