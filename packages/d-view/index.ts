import { App } from 'vue';
import { DViewOptions } from './utils/types';
import { setClassPrefix } from './utils/global-config';

const install = (app: App, options?: DViewOptions) => {};

const DView = {
  install,
  setClassPrefix,
};

export default DView;
