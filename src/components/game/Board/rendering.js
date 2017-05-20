/*
 *
 */

import React from 'react';

import DroppableSquareContainer from '../../../containers/dnd/DroppableSquareContainer';
import DraggablePieceContainer from '../../../containers/dnd/DraggablePieceContainer';

const createCells = ( piecePosition = 0 ) => {
    const cells = [];

    for ( let i = 0; i < 8; i++ ) {
        for ( let j = 0; j < 8; j++ ) {
            cells.push(
                <DroppableSquareContainer
                    key={8 * i + j}
                    dark={i % 2 === 0 ? j % 2 === 0 : j % 2 === 1 }
                    id={8 * i + j}
                >
                    {piecePosition === 8 * i + j ? <DraggablePieceContainer /> : null}
                </DroppableSquareContainer>
            );
        }
    }

    return cells;
};

export { createCells };
