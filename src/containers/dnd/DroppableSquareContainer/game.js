/*
 *
 */

const legalMove = ( id, piecePosition ) => {
    const pieceX = Math.floor( piecePosition / 8 );
    const pieceY = piecePosition % 8;
    const dropX = Math.floor( id / 8 );
    const dropY = id % 8;
    const dX = dropX - pieceX;
    const dY = dropY - pieceY;

    return ( Math.abs( dX ) === 2 && Math.abs( dY ) === 1 ) ||
        ( Math.abs( dX ) === 1 && Math.abs( dY ) === 2 );
};

export { legalMove };
