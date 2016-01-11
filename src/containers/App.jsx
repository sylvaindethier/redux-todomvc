import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// actions
import Actions from '../actions';
// components
import Header from '../components/Header';
import MainSection from '../components/MainSection';

// import MainSection from '../components/MainSection';

class App extends Component {
  render() {
    // <MainSection todos={todos} actions={actions} />
    // Injected by connect() call:
    const { actions, todos, filter } = this.props;
    return (
      <div>
        <Header actions={actions} />
        <MainSection actions={actions} todos={todos} filter={filter} />
      </div>
    );
  }
}

App.propTypes = {
  actions: PropTypes.object.isRequired,

  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
  }).isRequired).isRequired,

  filter: PropTypes.string.isRequired,
};

function mapStateToProps(state) {
  return {
    todos: state.todos,
    filter: state.filter,
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
