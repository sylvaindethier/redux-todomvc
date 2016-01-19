import React, { PropTypes } from 'react';
import { PropTypesActions, PropTypesTodos, PropTypesEditing } from '../props/types';
import defaultProps, { defaultPropsTodoList } from '../props/defaults';
import Todo from './Todo';


export default function TodoList(props) {
  const { actions, todos, editing } = props;

  const {
    ulProps,
    ulProps: { children: {
      liProps,
    } },
    ulProps: { children: { liProps: { children: {
      TodoProps,
    } } } },
  } = props;
  return (
    <ul {...defaultProps(ulProps)}>
      {todos.map(todo => (
        <li key={todo.id} {...defaultProps(liProps, todo.done, editing.id === todo.id)}>
          <Todo
            actions={actions}
            todo={todo}
            editing={editing}
            {...defaultProps(TodoProps)}
          />
        </li>
      ))}
    </ul>
  );
}

TodoList.propTypes = {
  actions: PropTypesActions,
  todos: PropTypesTodos,
  editing: PropTypesEditing,

  ulProps: PropTypes.shape({ children: PropTypes.shape({
    liProps: PropTypes.shape({ children: PropTypes.shape({
      TodoProps: PropTypes.object,
    }) }),
  }) }),
};

TodoList.defaultProps = defaultPropsTodoList;
