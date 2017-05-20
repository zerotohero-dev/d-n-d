/*
 *
 */

import { DragDropContext as context } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import BoardContainer from '../../../containers/game/BoardContainer';

export default context( HTML5Backend )( BoardContainer );
