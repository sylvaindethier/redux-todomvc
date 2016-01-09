// FSA compliant, see https://github.com/acdlite/flux-standard-action
import { createAction } from 'redux-actions';
import {
  FILTER,
} from '../constants/actions';

// fliter payload: filters
export const filter = createAction(FILTER, filters => filters);
