/*
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import { createCells } from './rendering';

const Board = ( { piecePosition } ) => ( <div className="board">{createCells( piecePosition )}</div> );

Board.defaultProps = {
    piecePosition: 0
};

Board.propTypes = {
    piecePosition: PropTypes.number
};

export default Board;
