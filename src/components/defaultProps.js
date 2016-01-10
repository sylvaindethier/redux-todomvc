export const TodoTextInput = {
  value: '',
  isNew: false,
  input: {},
};

export const CreateTodo = {
  TodoTextInput: Object.assign({}, TodoTextInput, {
    isNew: true,
  }),
};


export const Header = {
  header: { className: 'header' },
  h1: { children: 'todos' },
  CreateTodo: { TodoTextInput: Object.assign({}, CreateTodo.TodoTextInput, {
    input: {
      placeholder: 'What needs to be done',
      className: 'new-todo',
    },
  }) },
};

export const MainSection = {

};

export const TodoList = {
  ul: { className: 'todo-list' },
};
