/*
 *
 */

import { getInitialState } from '../store';

import { createRootReducer } from 'kink';

import * as constants from '../../../../lib/constants';

import move from './move';

const rootReducer = createRootReducer( getInitialState, {
    [constants.ACTION_MOVE]: move
} );

export { rootReducer };
