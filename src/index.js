/*
 *
 */

import React from 'react';
import { render } from 'react-dom';
import { $ } from 'dombili';

import ContextualBoardContainer from './containers/dnd/ContextualBoardContainer';

import './css/main.css';

render( <ContextualBoardContainer />, $( '#react-root' ) );
