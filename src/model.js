import { uuid } from './utils';

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


export default {
  create,
  updateText,
  updateDone,
  toggleDone,
};
