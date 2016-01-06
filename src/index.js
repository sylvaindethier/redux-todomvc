import 'babel-polyfill';
import React, { Component } from 'react';
import { render } from 'react-dom';
// import { Provider } from 'react-redux';
// import App from './containers/App';
// import configureStore from './store/configureStore';

// const store = configureStore();
const root = document.getElementById('root');

// render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   root
// );

class Cmp extends Component {
  render() {
    return (
      <div>Component</div>
    );
  }
}

render(<Cmp />, root);
