import { App } from 'vue';
import { DViewOptions } from './utils/types';
import { setClassPrefix, setComponentPrefix } from './utils/global-config';
import Components from './components';

const install = (app: App, options?: DViewOptions) => {
  setClassPrefix(options?.classNamePrefix);
  setComponentPrefix(options?.componentsPrefix);
  // 注册组件
  for (const key of Object.keys(Components)) {
    app.use(Components[key], options);
  }
};

const DView = {
  ...Components,
  install,
  setClassPrefix,
};

export default DView;
