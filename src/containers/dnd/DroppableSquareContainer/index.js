/*
 *
 */

import React from 'react';
import { DropTarget as target } from 'react-dnd';
import { connect as connectStore } from 'kink';

import * as actions from './actions';

import { DND_PIECE } from '../../../lib/constants';

import SquareContainer from '../../../containers/game/SquareContainer';

import { legalMove } from './game';

const DroppableSquareContainer = target(
    DND_PIECE, {
        canDrop( { id, piecePosition } ) {
            return legalMove( id, piecePosition );
        },

        drop( { move, id } ) { move( id ); }
    },
    ( connect, monitor ) => ( {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop()
    } )
)(
    ( { connectDropTarget, canDrop, isOver, dark, children } ) => connectDropTarget(
        <div>
            <SquareContainer dark={dark} highlight={isOver} accepts={canDrop}>{children}</SquareContainer>
        </div>
    )
);

export default connectStore( DroppableSquareContainer, actions );
