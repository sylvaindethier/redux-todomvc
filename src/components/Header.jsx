import React, { PropTypes, Component } from 'react';
import CreateTodoComponent from './actions/CreateTodo';
import { Header as defaultProps } from './defaultProps';

export default class Header extends Component {
  render() {
    const { header, h1, CreateTodo, createTodoAction } = this.props;
    return (
      <header {...header}>
        <h1 {...h1} />
        <CreateTodoComponent
          createTodoAction={createTodoAction}
          {...CreateTodo}
        />
      </header>
    );
  }
}

Header.propTypes = {
  createTodoAction: PropTypes.func.isRequired,
  CreateTodo: PropTypes.object,
  header: PropTypes.object,
  h1: PropTypes.object,
};

Header.defaultProps = defaultProps;
