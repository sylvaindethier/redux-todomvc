import React, { Component } from 'react';
import { PropTypesApp } from '../props/types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// actions
import Actions from '../actions';
// components
import Header from '../components/Header';
import MainSection from '../components/MainSection';


// we do NOT export this component, it has to be connected w/ react-redux
class App extends Component {
  render() {
    // Injected by connect() call:
    const { actions, todos, filter, editing } = this.props;
    return (
      <div>
        <Header
          actions={actions}
          editing={editing}
        />
        <MainSection
          actions={actions}
          todos={todos}
          filter={filter}
          editing={editing}
        />
      </div>
    );
  }
}

App.propTypes = PropTypesApp;
App.displayName = 'App';

function mapStateToProps(state) {
  return {
    todos: state.todos,
    filter: state.filter,
    editing: state.editing,
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
