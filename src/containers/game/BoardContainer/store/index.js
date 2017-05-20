/*
 *
 */

import { createStore } from 'redux';

import { rootReducer } from '../reducers';
import { generateRandomPosition } from '../../../../lib/state';

const zeroState = {
    piecePosition: generateRandomPosition()
};

const getInitialState = () => zeroState;

const initialize = ( reducer = rootReducer, initialState = zeroState ) =>
    createStore( reducer, initialState );

export { getInitialState };

export default initialize;
