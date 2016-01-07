import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import TodoTextInput from './TodoTextInput';


export default class TodoItem extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      editing: false,
    };

    // bind handlers as there's no auto binding in Component class
    this.handleDoubleClick = this.handleDoubleClick.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  handleDoubleClick() {
    this.setState({ editing: true });
  }

  handleSave(id, text) {
    const { actions } = this.props;
    if (text.length === 0) {
      actions.deleteTodo(id);
    } else {
      actions.editTodo(id, text);
    }
    this.setState({ editing: false });
  }

  render() {
    const { todo, actions } = this.props;

    let element;
    if (this.state.editing) {
      const save = (text) => this.handleSave(todo.id, text);
      element = (
        <TodoTextInput value={todo.text} save={save} />
      );
    } else {
      const handleChange = () => actions.completeTodo(todo.id);
      const handleClick = () => actions.deleteTodo(todo.id);
      element = (
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={todo.completed}
            onChange={handleChange}
          />
          <label onDoubleClick={this.handleDoubleClick}>
            {todo.text}
          </label>
          <button className="destroy" onClick={handleClick} />
        </div>
      );
    }

    return (
      <li className={classnames({
        completed: todo.completed,
        editing: this.state.editing,
      })}
      >
        {element}
      </li>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
};
