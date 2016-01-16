import React, { PropTypes } from 'react';
import { App as AppPropTypes } from '../props/types';
import defaults, { MainSection as defaultProps } from '../props/defaults';
import { filterDone } from '../model';
import ToggleAllDone from './actions/ToggleAllDone';
import TodoList from './TodoList';
import Footer from './Footer';


/**
 * MainSection component
 */
export default function MainSection(props) {
  const { actions, todos, filter, editing } = props;
  const filtered = todos.filter(filterDone(filter));
  const totalCount = todos.length;
  const doneCount = todos.reduce((count, todo) =>
    todo.done ? count + 1 : count,
    0
  );
  const filteredCount = filtered.length;

  const { section } = props;
  const {
    ToggleAllDone: toggleAllDone,
    TodoList: todoList,
    Footer: footer,
  } = section.children;

  const elToggleAllDone = !totalCount ? null : (
    <ToggleAllDone
      actions={actions}
      areAllDone={doneCount === totalCount}
      {...defaults(toggleAllDone)}
    />
  );
  const elTodoList = !totalCount ? null : (
    <TodoList
      actions={actions}
      todos={filtered}
      editing={editing}
      {...defaults(todoList)}
    />
  );
  const elFooter = !totalCount ? null : (
    <Footer
      actions={actions}
      filter={filter}
      filteredCount={filteredCount}
      doneCount={doneCount}
      totalCount={totalCount}
      {...defaults(footer)}
    />
  );

  return (
    <section {...section}>
      {elToggleAllDone}
      {elTodoList}
      {elFooter}
    </section>
  );
}

MainSection.propTypes = Object.assign({}, AppPropTypes, {
  section: PropTypes.shape({ children: PropTypes.shape({
    ToggleAllDone: PropTypes.object,
    TodoList: PropTypes.object,
    Footer: PropTypes.object,
  }) }),
});

MainSection.defaultProps = defaultProps;
