import { resolve } from 'path';
import { writeFileSync } from 'fs';
import { configureRootString } from '../src/containers/root';

export function buildRootStringModule(initialState) {
  const root = configureRootString(initialState);
  const modulePath = resolve(__dirname, '../src/rootString.js');
  writeFileSync(modulePath, `export default '${root}';`);
}

buildRootStringModule();
