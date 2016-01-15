import { store } from '../utils';
import { EDIT_TODO_TEXT, CANCEL_EDIT_TODO_TEXT } from '../constants/actions';

const excludeActionTypes = {
  EDIT_TODO_TEXT,
  CANCEL_EDIT_TODO_TEXT,
};


// basic storage saver middleware
export default function saver({
  getState,
  // dispatch,
}) {
  return (next) => (action) => {
    // perform action
    const nextState = next(action);
    // and store new state if action type is not excluded
    if (!excludeActionTypes.hasOwnProperty(action.type)) store(getState());

    return nextState;
  };
}
