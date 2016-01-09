export const TodoTextInput = {
  value: '',
  isNew: false,
  input: {},
};

export const Header = {
  header: { className: 'header' },
  h1: { children: 'todos' },
  TodoTextInput: Object.assign({}, TodoTextInput, {
    isNew: true,
    input: {
      placeholder: 'What needs to be done',
      className: 'new-todo -edit',
    },
  }),
};
