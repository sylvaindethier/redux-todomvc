export function defaultProps(defaults, ...args) {
  const _props = {};
  for (const key in defaults) {
    if (!defaults.hasOwnProperty(key)) continue;
    const value = defaults[key];
    _props[key] = typeof value !== 'function' ? value : value(...args);
  }

  return _props;
}

export const TodoTextInput = {
  isNew: false,
  // input: {},
};

export const CreateText = {
  TodoTextInput: Object.assign({}, TodoTextInput, {
    isNew: true,
    value: '',
    input: {
      placeholder: 'What needs to be done',
      className: 'new-todo',
    },
  }),
};

export const UpdateTodoText = {
  TodoTextInput: Object.assign({}, TodoTextInput, {
    input: {
      className: 'edit',
    },
  }),
};

export const DeleteTodo = {
  button: { className: 'destroy' },
};

export const DeleteAll = {
};

export const DeleteAllDone = {
  button: {
    className: 'clear-completed',
    children: 'Delete completed',
  },
};

export const ToggleTodoDone = {
  input: { className: 'toggle' },
};

export const ToggleAllDone = {
  input: { className: 'toggle-all' },
  totalCount: 0,
  doneCount: 0,
};

export const Filter = {
  isCurrent: false,
  el: {
    className: props => props.isCurrent ? 'selected' : '',
    children: props => ({ NONE: 'All', DONE: 'Done', TODO: 'Todo' })[props.filter],
  },
};

/* ************************************************************************* */

export const FilterList = {
  ul: {
    className: 'filters',
    children: {
      li: {
        children: {
          // Filter: {}
        },
      },
    },
  },
};

export const Footer = {
  totalCount: 0,
  doneCount: 0,
  filteredCount: 0,
  footer: {
    className: 'footer',
    children: {
      span: {
        className: 'todo-count',
        dangerouslySetInnerHTML: (leftCount, totalCount, filteredCount) => ({
          __html: [
            filteredCount,
            ':',
            '<strong>' + (leftCount || 'No') + '</strong>',
            leftCount === 1 ? 'item' : 'items',
            'left / ' + totalCount,
          ].join(' '),
        }),
      },
      // FilterList: {},
      // DeleteAllDone: {},
    },
  },
};

export const Header = {
  header: {
    className: 'header',
    children: {
      h1: { children: 'todos' },
      // CreateText: {},
    },
  },
};

export const MainSection = {
  section: {
    className: 'main',
    children: {
      // ToggleAllDone: {},
      // TodoList: {},
      // Footer: {},
    },
  },
};

export const Todo = {
  // UpdateTodoText: {},
  div: {
    className: 'view',
    children: {
      // ToggleTodoDone: {},
      // label: {},
      // DeleteTodo: {},
    },
  },
};

export const TodoList = {
  ul: {
    className: 'todo-list',
    children: {
      li: {
        className: (done, editing) => [
          done ? 'completed' : null,
          editing ? 'editing' : null,
        ].join(' '),
        children: {
          // Todo: {}
        },
      },
    },
  },
};
