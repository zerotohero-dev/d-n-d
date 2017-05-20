/*
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import Square from '../../../components/game/Square';

const SquareContainer = ( { dark, highlight, children, accepts } ) => (
    <Square highlight={highlight} dark={dark} accepts={accepts}>{children}</Square>
);

SquareContainer.defaultProps = {
    highlight: false
};

SquareContainer.propTypes = {
    children: PropTypes.element,
    highlight: PropTypes.bool,
    dark: PropTypes.bool,
    accepts: PropTypes.bool
};

export default SquareContainer;
