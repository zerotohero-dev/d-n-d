/*
 *
 */

const move = ( state = {}, { id } ) => {
    return {
        ...state,
        piecePosition: id
    };
};

export default move;
