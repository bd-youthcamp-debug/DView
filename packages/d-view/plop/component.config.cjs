const {validate, actions} = require('./utils.cjs');

const componentPath = 'components';
const componentStylePath = 'style/theme/components';

module.exports = {
    description: '新建组件',
    prompts: [
        {
            type: 'input',
            name: 'componentName',
            message: '请输入组件名称 [请使用kebab-case命名, 如button,table-header]:',
            validate: validate.validate(
                validate.emptyValidate('组件名称禁止为空 !'),
                validate.kebabCaseValidate
            ),
        }, {
            type: 'confirm',
            name: 'isUseLess',
            message: '是否创建样式表? [默认为 Yes]',
            default: true,
        }
    ],
    actions: [
        {
            type: 'addMany',
            destination: `${componentPath}/{{componentName}}/`,
            base: 'plop/templates/component/',
            templateFiles: 'plop/templates/component/!(component.vue|*.less).hbs'
        }, {
            type: 'add',
            path: `${componentPath}/{{componentName}}/{{componentName}}.vue`,
            templateFile: 'plop/templates/component/component.vue.hbs'
        }, {
            type: 'add',
            path: `${componentStylePath}/{{componentName}}/index.less`,
            templateFile: 'plop/templates/component/index.less.hbs',
            skip: actions.skip({isUseLess: false}, '跳过样式文件生成'),
        }, {
            type: 'add',
            path: `${componentStylePath}/{{componentName}}/component-var.less`,
            templateFile: 'plop/templates/component/component-var.less.hbs',
            skip: actions.skip({isUseLess: false}, '跳过样式文件生成'),
        }, {
            type: 'modify',
            path: `${componentStylePath}/index.less`,
            pattern: /\/\/\s--\s这行不要编辑!\s\sAPPEND\sIMPORT\sCOMPONENT\sSTYLE\sHERE\s--\s\/\//,
            template: '@import \'./{{componentName}}/index.less\';' +
                '\n// -- 这行不要编辑!  APPEND IMPORT COMPONENT STYLE HERE -- //',
            skip: actions.skip({isUseLess: false}, '跳过引入组件样式文件'),
        }, {
            type: 'modify',
            path: `${componentPath}/index.ts`,
            pattern: /\/\/\s--\s这行不要编辑!\s\sAPPEND\sIMPORT\sCOMPONENT HERE\s--\s\/\//,
            template: 'import {{kebabToPascal componentName}} from \'./{{componentName}}\';' +
                '\n// -- 这行不要编辑!  APPEND IMPORT COMPONENT HERE -- //',
        }, {
            type: 'modify',
            path: `${componentPath}/index.ts`,
            pattern: /\/\/\s--\s这行不要编辑!\s\sAPPEND\sCOMPONENTS\sLIST\sHERE\s--\s\/\//,
            template: '  {{kebabToPascal componentName}},' +
                '\n// -- 这行不要编辑!  APPEND COMPONENTS LIST HERE -- //',
        }, {
            type: 'modify',
            path: `${componentPath}/index.ts`,
            pattern: /\/\/\s--\s这行不要编辑!\s\sAPPEND\sEXPORT\sCOMPONENT\sPROPS\sTYPE\sHERE\s--\s\/\//,
            template: 'export type { {{kebabToPascal componentName}}Props } from \'./{{componentName}}\';' +
                '\n// -- 这行不要编辑!  APPEND EXPORT COMPONENT PROPS TYPE HERE -- //',
        },
    ]
};
