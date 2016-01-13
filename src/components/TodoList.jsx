import React, { PropTypes, Component } from 'react';
import {
  actions as actionsPropTypes,
  todos as todosPropTypes,
  editing as editingPropTypes,
} from './.propTypes';
import { TodoList as defaultProps, defaultProps as defaults } from './.defaultProps';
import Todo from './Todo';


export default class TodoList extends Component {
  render() {
    const { actions, todos, editing } = this.props;
    if (todos.length < 1) {
      return null;
    }

    const { ul } = this.props;
    const { li } = ul.children;
    const { Todo: todo } = li.children;
    return (
      <ul {...defaults(ul)}>
        {todos.map(td => (
          <li key={td.id} {...defaults(li, td.done, editing === td.id)}>
            <Todo
              actions={actions}
              todo={td}
              editing={editing === td.id}
              {...defaults(todo)}
            />
          </li>
        ))}
      </ul>
    );
  }
}

TodoList.propTypes = {
  actions: actionsPropTypes,
  todos: todosPropTypes,
  editing: editingPropTypes,

  ul: PropTypes.shape({ children: PropTypes.shape({
    li: PropTypes.shape({ children: PropTypes.shape({
      Todo: PropTypes.object,
    }) }),
  }) }),
};

TodoList.defaultProps = defaultProps;
