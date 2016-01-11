import React, { Component, PropTypes } from 'react';
import { MainSection as defaultProps, defaultProps as defaults } from './defaultProps';
import ToggleAllDone from './actions/ToggleAllDone';
import TodoList from './TodoList';
import Footer from './Footer';


import { NONE, DONE, TODO } from '../constants/filters';
const filterCallbacks = {
  [NONE]: () => true,
  [DONE]: todo => todo.done,
  [TODO]: todo => !todo.done,
};


export default class MainSection extends Component {
  render() {
    const { actions, todos, filter } = this.props;
    const filtered = todos.filter(filterCallbacks[filter]);
    const totalCount = todos.length;
    const doneCount = todos.reduce((count, todo) =>
      todo.done ? count + 1 : count,
      0
    );
    const filteredCount = filtered.length;


    const { section } = this.props;
    const {
      ToggleAllDone: toggleAllDone,
      TodoList: todoList,
      Footer: footer,
    } = section.children;
    return (
      <section {...section}>
        {!totalCount ? null : (
          <ToggleAllDone
            toggleAllDoneAction={actions.toggleAllDone}
            areAllDone={doneCount === totalCount}
            {...defaults(toggleAllDone)}
          />
        )}
        <TodoList
          actions={actions}
          todos={filtered}
          {...defaults(todoList)}
        />
        {!totalCount ? null : (
          <Footer
            actions={actions}
            filter={filter}
            filteredCount={filteredCount}
            doneCount={doneCount}
            totalCount={totalCount}
            {...defaults(footer)}
          />
        )}
      </section>
    );
  }
}

MainSection.propTypes = {
  actions: PropTypes.object.isRequired,
  todos: PropTypes.array.isRequired,
  filter: PropTypes.string.isRequired,

  section: PropTypes.shape({ children: PropTypes.shape({
    ToggleAllDone: PropTypes.object,
    TodoList: PropTypes.object,
    Footer: PropTypes.object,
  }) }),
};

MainSection.defaultProps = defaultProps;
