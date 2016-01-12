// FSA compliant, see https://github.com/acdlite/flux-standard-action
import { createAction } from 'redux-actions';
import {
  EDITING,
} from '../constants/actions';

// editing payload: editing id
export const editing = createAction(EDITING, id => id);
