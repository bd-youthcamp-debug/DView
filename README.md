# DView
DView 组件库

## 开发指南
> 注意事项: 每次开发时 / 收到**master**分支变动后记得**更新 master 分支 !**

### 1. 新建分支
请基于`master`分支另起一个新分支, 名为`<分支类型>-[组件名称]-<序号>`

类型列表:
- 功能（feature）分支
- 预发布（release）分支
- 修补bug（fix）分支

例如: `feature-button-1`, `feature-button-2`, `feature-button-x`

若为`bug修复`则是`fix-button-1`, `fix-button-x`

### 2. 开发前准备

#### 安装 pnpm
本项目使用 `pnpm` 作为包管理器, 使用前请先安装 `pnpm`
```shell
npm install -g pnpm
```

#### 安装依赖
执行以下指令安装依赖
```shell
pnpm i
```

### 3. 新建组件
使用`plop.js`新建组件
> 提示: 新建组件时注意终端路径要处于`/packages/d-view`目录下

在`/packages/d-view`目录下执行指令, 并根据提示新建一个组件
```shell
pnpm plop
```
`plop` 可以通过参数跳过选项直接创建, 具体内容可以参考 [bypassing-prompts](https://github.com/plopjs/plop#bypassing-prompts)

#### 创建后的目录结构
执行创建组件指令后, 会生成以下结构 (test-comp 假设是你新建的组件)
```text
d-view
 ├── components
 │   └── test-comp
 │       ├── index.ts
 │       ├── README.zh-CN.md
 │       ├── test-comp.vue
 │       └── types.ts
 └── style
     └── theme
         └── components
             └── test-comp
                 └── index.less
                 └── component-var.less
```
##### TS / VueTemplate相关
`components` 目录下生成的 `test-comp` 是你的组件目录, 其中 **index.ts 不需要更改** 只需要在 `test-comp.vue` 中编写组件即可

`type.ts` 文件是存放组件属性的文件, 请在其中的 `xxxProps` 内定义组件的属性, 如果需要定义 `Props` 的类型也需要在此文件内定义, 再从组件的 `vue` 文件中导入使用

具体声明 props 的类型请查看 [vue 官方文档](https://cn.vuejs.org/guide/typescript/composition-api.html#complex-prop-types)

> PS: Vue 文件内的属性还是需要定义的, type.ts 内的属性只是用于 TS
> 
> PS2: Vue 模板中的样式都需使用 class, 如非必要请勿使用内联样式 !
> 
> PS3: 涉及动态切换 class 的请使用 [绑定对象](https://cn.vuejs.org/guide/essentials/class-and-style.html#binding-html-classes) 或者 [绑定数组](https://cn.vuejs.org/guide/essentials/class-and-style.html#binding-html-classes)

##### 样式相关
样式使用`Less`进行开发, 生成的模板文件已引入颜色变量与常用变量

涉及颜色的请使用变量, 具体变量请查看引入的`color.less`

若常用变量内已定义, 优先使用常用变量, 具体变量请查看引入的 `common-var.less`

> PS: 请勿使用 `!important` 优先级, 除非必要
> 
> PS2: 组件样式的重要属性尽量在`component-var.less`中定义并使用变量替代硬编码属性
> 
> 如果不知道需要定义哪些变量可以参考 [Arco Design 主题配置](https://arco.design/themes/design/58/setting/base/Color?from=%2Fthemes%2F%3FcurrentPage%3D1%26onlyPublished%3Dfalse%26pageSize%3D9%26sortBy%3DstarCount%26tag%3Dall)

### 4. 预览开发效果
开发效果可以在`/packages/d-demo`中引用并预览, `/packages/d-demo` 内的修改无需进行 commit

> PS: 目前仅支持全局引入, 打包方式还需要修改, 请见谅 😭

### 5. 提交 PR
完成开发与测试后, 确保组件可以正常使用后, 提交 PR

PR 内容需要写明本次更改的内容, 提交 PR 申请后等待 CI 检查完毕并通过 review 即可合并
