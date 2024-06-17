import RouterA from './router-a';
import RouterB from './router-b';

const routesConfig = {
  RouterA,
  RouterB,
};
export default routesConfig;
export type RouterKey = keyof typeof routesConfig;
