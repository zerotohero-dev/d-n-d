/*
 *
 */

import React from 'react';
import { DragSource as source } from 'react-dnd';

import { DND_PIECE } from '../../../lib/constants';

import PieceContainer from '../../../containers/game/PieceContainer';

export default source(
    DND_PIECE, {
        beginDrag() { return {}; },
        endDrag() {}
    },
    ( connect, monitor ) => ( {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    } )
)(
    ( { connectDragSource } ) => connectDragSource( <div><PieceContainer /></div> )
);
