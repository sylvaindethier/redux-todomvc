import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// actions
import Actions from '../actions';
// components
import Header from '../components/Header';
import MainSection from '../components/MainSection';


class App extends Component {
  render() {
    // Injected by connect() call:
    const { actions, todos } = this.props;
    return (
      <div>
        <Header createTodoAction={actions.createTodo} />
        <MainSection todos={todos} actions={actions} />
      </div>
    );
  }
}

App.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired).isRequired,

  actions: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    todos: state.todos,
    filters: state.filters,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
