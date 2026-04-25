import { setup as theme } from './theme';

const modules = [theme];

export function mountPluin() {
  modules.map(module => module());
}

export { router } from './router';
