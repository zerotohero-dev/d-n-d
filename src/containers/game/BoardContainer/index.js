/*
 *
 */

import React from 'react';
import { Provider } from 'react-redux';
import { connect } from 'kink';

import store from './store';

import Board from '../../../components/game/Board';

const ConnectedBoard = connect( Board );

const BoardContainer = () => (
    <Provider store={store()}>
        <ConnectedBoard />
    </Provider>
);

export default BoardContainer;
