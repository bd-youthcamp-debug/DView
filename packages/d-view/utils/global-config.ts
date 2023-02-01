// eslint-disable-next-line func-names
const prefixManager = (function () {
  const prefix = Object.create({
    comp: 'D',
    class: 'DView',
  });

  return (type: 'get' | 'set', name: 'comp' | 'class', setValue?: string): string => {
    return type === 'get' ? prefix[name] : (prefix[name] = setValue);
  };
})();

// 获取组件前缀
export const getComponentPrefix = () => {
  return prefixManager('get', 'comp');
};
// 获取 className 前缀
export const getClassPrefix = () => {
  return prefixManager('get', 'class');
};
// 设置组件前缀
export const setComponentPrefix = (name: string | undefined) => {
  prefixManager('set', 'comp', name ?? getComponentPrefix());
};
// 设置 className 前缀
export const setClassPrefix = (name: string | undefined) => {
  prefixManager('set', 'class', name ?? getClassPrefix());
};
