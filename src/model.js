import { uuid } from './utils';
import { NONE, DONE, TODO } from './constants/filters';

export function create(text) {
  return {
    id: uuid(),
    done: false,
    text,
  };
}

export function updateText(todo, text) {
  return Object.assign({}, todo, { text });
}

export function updateDone(todo, done) {
  return Object.assign({}, todo, { done });
}

export function toggleDone(todo) {
  return updateDone(todo, !todo.done);
}

export const doneFilters = {
  [NONE]: () => true,
  [DONE]: todo => todo.done,
  [TODO]: todo => !todo.done,
};

export function filterDone(filter) {
  return doneFilters[filter] ? doneFilters[filter] : doneFilters[NONE];
}


export default {
  create,
  updateText,
  updateDone,
  toggleDone,
  doneFilters,
  filterDone,
};
