import React, { PropTypes, Component } from 'react';
import TodoTextInput from './TodoTextInput';

export default class Header extends Component {
  constructor(props, context) {
    super(props, context);

    // bind handlers as there's no auto binding in Component class
    this._onSave = this._onSave.bind(this);
  }

  _onSave(text) {
    if (text && text.length !== 0) {
      this.props.addTodo(text);
    }
  }

  render() {
    return (
      <header className="header">
          <h1>todos</h1>
          <TodoTextInput
            isNew
            save={this._onSave}
            placeholder="What needs to be done?"
          />
      </header>
    );
  }
}

Header.propTypes = {
  addTodo: PropTypes.func.isRequired,
};
