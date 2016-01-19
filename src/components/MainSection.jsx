import React, { PropTypes } from 'react';
import { PropTypesApp } from '../props/types';
import defaultProps, { defaultPropsMainSection } from '../props/defaults';
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

  const {
    sectionProps,
    sectionProps: { children: {
      ToggleAllDoneProps,
      TodoListProps,
      FooterProps,
    } },
  } = props;

  const elToggleAllDone = !totalCount ? null : (
    <ToggleAllDone
      actions={actions}
      areAllDone={doneCount === totalCount}
      {...defaultProps(ToggleAllDoneProps)}
    />
  );
  const elTodoList = !totalCount ? null : (
    <TodoList
      actions={actions}
      todos={filtered}
      editing={editing}
      {...defaultProps(TodoListProps)}
    />
  );
  const elFooter = !totalCount ? null : (
    <Footer
      actions={actions}
      filter={filter}
      filteredCount={filteredCount}
      doneCount={doneCount}
      totalCount={totalCount}
      {...defaultProps(FooterProps)}
    />
  );

  return (
    <section {...defaultProps(sectionProps)}>
      {elToggleAllDone}
      {elTodoList}
      {elFooter}
    </section>
  );
}

MainSection.propTypes = Object.assign({}, PropTypesApp, {
  sectionProps: PropTypes.shape({ children: PropTypes.shape({
    ToggleAllDoneProps: PropTypes.object,
    TodoListProps: PropTypes.object,
    FooterProps: PropTypes.object,
  }) }),
});

MainSection.defaultProps = defaultPropsMainSection;
MainSection.displayName = 'MainSection';
