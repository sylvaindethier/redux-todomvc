import 'babel-polyfill';
import { render } from 'react-dom';
import { configureRootComponent } from './containers/root';
import { store as db } from './utils';
import fixtures from './fixtures';

const initialState = db() || fixtures(db);
const component = configureRootComponent(initialState);
const containerId = 'root';

// add CSS file & render component
import 'todomvc-app-css/index.css';
render(component, document.getElementById(containerId));
