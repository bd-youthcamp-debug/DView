const componentConfig = require('./plop/component.config.cjs');
const hooks = require('./plop/hooks.cjs');

module.exports = function (plop) {
    hooks.execHooks(plop);
    plop.setGenerator('component', componentConfig);
};
