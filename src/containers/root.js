import { createFactory } from 'react';
import { renderToString } from 'react-dom/server';
import Root from './Root';
import configureStore from '../store/configureStore';


export const rootFactory = createFactory(Root);

export function configureRootComponent(initialState) {
  const store = configureStore(initialState);
  return rootFactory({ store });
}

export function configureRootString(initialState) {
  return renderToString(configureRootComponent(initialState));
}
