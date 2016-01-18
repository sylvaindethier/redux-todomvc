import { resolve } from 'path';
import { writeFileSync } from 'fs';
import { configureRootString } from '../src/containers/root';

export function buildRootStringModule(initialState) {
  const root = configureRootString(initialState);
  const content = `module.exports = '${root}'; export default module.exports;`;
  const path = resolve(__dirname, '../src/rootString.js');
  writeFileSync(path, content);
}

buildRootStringModule();
