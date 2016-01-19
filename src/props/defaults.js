export default function defaultProps(props, ...args) {
  const _props = {};
  for (const key in props) {
    if (!props.hasOwnProperty(key)) continue;
    const value = props[key];
    _props[key] = typeof value === 'function' ? value(...args) : value;
  }

  return _props;
}


export const defaultPropsEditTodoText = {
  isNew: false,
  // inputProps: {},
};

export const defaultPropsCreateText = {
  EditTodoTextProps: Object.assign({}, defaultPropsEditTodoText, {
    isNew: true,
    inputProps: {
      placeholder: 'What needs to be done',
      className: 'new-todo',
    },
  }),
};

export const defaultPropsDeleteAll = {
};

export const defaultPropsDeleteAllDone = {
  buttonProps: {
    className: 'clear-completed',
    children: 'Delete completed',
  },
};

export const defaultPropsDeleteTodo = {
  buttonProps: { className: 'destroy' },
};

export const defaultPropsEditableTodoText = {
  // labelProps: {},
};

export const defaultPropsFilter = {
  isCurrent: false,
  aProps: {
    className: props => props.isCurrent ? 'selected' : '',
    style: props => (props.isCurrent ? null : { cursor: 'pointer' }),
    children: props => ({ NONE: 'All', DONE: 'Done', TODO: 'Todo' })[props.filter],
  },
};

export const defaultPropsToggleAllDone = {
  inputProps: { className: 'toggle-all' },
  totalCount: 0,
  doneCount: 0,
};

export const defaultPropsToggleTodoDone = {
  inputProps: { className: 'toggle' },
};

export const defaultPropsUpdateTodoText = {
  EditTodoTextProps: Object.assign({}, defaultPropsEditTodoText, {
    inputProps: {
      className: 'edit',
    },
  }),
};


/* ************************************************************************* */


export const defaultPropsFilterList = {
  ulProps: {
    className: 'filters',
    children: {
      liProps: {
        children: {
          // FilterProps: {}
        },
      },
    },
  },
};

export const defaultPropsFooter = {
  totalCount: 0,
  doneCount: 0,
  filteredCount: 0,
  footerProps: {
    className: 'footer',
    children: {
      spanProps: {
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
      // FilterListProps: {},
      // DeleteAllDoneProps: {},
    },
  },
};

export const defaultPropsHeader = {
  headerProps: {
    className: 'header',
    children: {
      h1Props: { children: 'todos' },
      // CreateTextProps: {},
    },
  },
};

export const defaultPropsMainSection = {
  sectionProps: {
    className: 'main',
    children: {
      // ToggleAllDoneProps: {},
      // TodoListProps: {},
      // FooterProps: {},
    },
  },
};

export const defaultPropsTodo = {
  // UpdateTodoTextProps: {},
  divProps: {
    className: 'view',
    children: {
      // ToggleTodoDoneProps: {},
      // EditableTodoTextProps: {},
      // DeleteTodoProps: {},
    },
  },
};

export const defaultPropsTodoList = {
  ulProps: {
    className: 'todo-list',
    children: {
      liProps: {
        className: (done, editing) => [
          done ? 'completed' : null,
          editing ? 'editing' : null,
        ].join(' '),
        children: {
          // TodoProps: {}
        },
      },
    },
  },
};
