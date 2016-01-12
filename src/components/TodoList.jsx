import React, { PropTypes, Component } from 'react';
import { TodoList as defaultProps, defaultProps as defaults } from './defaultProps';
import Todo from './Todo';


// TODO: remove state from this component
function buildState(editing) { return { editing }; }


export default class TodoList extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = buildState(false);

    // bind handlers as there's no auto binding in Component class
    this.setTodoEdit = this.setTodoEdit.bind(this);
    this.unsetTodoEdit = this.unsetTodoEdit.bind(this);
  }

  setTodoEdit(id) {
    this.setState(buildState(id));
  }

  unsetTodoEdit() {
    this.setState(buildState(false));
  }

  render() {
    const { actions, todos } = this.props;
    const { editing } = this.state;
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
              setTodoEdit={this.setTodoEdit}
              unsetTodoEdit={this.unsetTodoEdit}
              {...defaults(todo)}
            />
          </li>
        ))}
      </ul>
    );
  }
}

TodoList.propTypes = {
  actions: PropTypes.object.isRequired,
  todos: PropTypes.array.isRequired,

  ul: PropTypes.shape({ children: PropTypes.shape({
    li: PropTypes.shape({ children: PropTypes.shape({
      Todo: PropTypes.object,
    }) }),
  }) }),
};

TodoList.defaultProps = defaultProps;
