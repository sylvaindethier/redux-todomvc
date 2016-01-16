export default function defaults(props, ...args) {
  const _props = {};
  for (const key in props) {
    if (!props.hasOwnProperty(key)) continue;
    const value = props[key];
    _props[key] = typeof value === 'function' ? value(...args) : value;
  }

  return _props;
}


export const EditTodoText = {
  isNew: false,
  // input: {},
};

export const CreateText = {
  EditTodoText: Object.assign({}, EditTodoText, {
    isNew: true,
    input: {
      placeholder: 'What needs to be done',
      className: 'new-todo',
    },
  }),
};

export const DeleteAll = {
};

export const DeleteAllDone = {
  button: {
    className: 'clear-completed',
    children: 'Delete completed',
  },
};

export const DeleteTodo = {
  button: { className: 'destroy' },
};

export const EditableTodoText = {
  // label: {},
};

export const Filter = {
  isCurrent: false,
  a: {
    className: props => props.isCurrent ? 'selected' : '',
    style: props => (props.isCurrent ? null : { cursor: 'pointer' }),
    children: props => ({ NONE: 'All', DONE: 'Done', TODO: 'Todo' })[props.filter],
  },
};

export const ToggleAllDone = {
  input: { className: 'toggle-all' },
  totalCount: 0,
  doneCount: 0,
};

export const ToggleTodoDone = {
  input: { className: 'toggle' },
};

export const UpdateTodoText = {
  EditTodoText: Object.assign({}, EditTodoText, {
    input: {
      className: 'edit',
    },
  }),
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
      // EditableTodoText: {},
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