// FSA compliant, see https://github.com/acdlite/flux-standard-action
import { createAction } from 'redux-actions';
import {
  FILTER,
} from '../constants/actions';

// filter payload: filter name
export const filter = createAction(FILTER, name => name);
