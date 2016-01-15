import React, { Component } from 'react';
import { App as AppPropTypes } from '../components/.propTypes';
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

App.propTypes = AppPropTypes;

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
