import React, { Component, PropTypes } from 'react';
import TodoItem from './TodoItem';
import Footer from './Footer';
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../constants/TodoFilters';

const TODO_FILTERS = {
  [SHOW_ALL]: () => true,
  [SHOW_ACTIVE]: todo => !todo.completed,
  [SHOW_COMPLETED]: todo => todo.completed,
};

export default class MainSection extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = { filter: SHOW_ALL };

    // bind handlers as there's no auto binding in Component class
    this.handleDeleteCompleted = this.handleDeleteCompleted.bind(this);
    this.handleShow = this.handleShow.bind(this);
  }

  handleDeleteCompleted() {
    const { todos, actions } = this.props;
    const hasOneCompleted = todos.some(todo => todo.completed);
    if (hasOneCompleted) {
      actions.deleteCompleted();
    }
  }

  handleShow(filter) {
    this.setState({ filter });
  }

  renderToggleAll(completedCount) {
    const { todos, actions } = this.props;
    if (todos.length > 0) {
      return (
        <input
          className="toggle-all"
          type="checkbox"
          checked={completedCount === todos.length}
          onChange={actions.completeAll}
        />
      );
    }
  }

  renderFooter(completedCount) {
    const { todos } = this.props;
    const { filter } = this.state;
    const activeCount = todos.length - completedCount;

    if (todos.length) {
      return (
        <Footer
          completedCount={completedCount}
          activeCount={activeCount}
          filter={filter}
          onClearCompleted={this.handleDeleteCompleted}
          onShow={this.handleShow}
        />
      );
    }
  }

  render() {
    const { todos, actions } = this.props;
    const { filter } = this.state;

    const filteredTodos = todos.filter(TODO_FILTERS[filter]);
    const completedCount = todos.reduce((count, todo) =>
      todo.completed ? count + 1 : count,
      0
    );
    const todoItems = filteredTodos.map(todo =>
      <TodoItem key={todo.id} todo={todo} actions={actions} />
    );

    return (
      <section className="main">
        {this.renderToggleAll(completedCount)}
        <ul className="todo-list">
          {todoItems}
        </ul>
        {this.renderFooter(completedCount)}
      </section>
    );
  }
}

MainSection.propTypes = {
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};
