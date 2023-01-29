# DView
## 自定义组件前缀与样式前缀
> 注意: 自定义样式前缀需要引入`less`, 并修改`less`中的前缀变量`prefix` !

### 全局引入
在引入 DView 时可以传入一个配置对象来自定义样式前缀与组件前缀
```js
import { createApp } from 'vue'
import DView from 'DView';
import 'DView/dist/DView.less';
import App from './App.vue';

const app = createApp(App);
app.use(DView, {
  // 使用组件时的前缀名称 (可选)
  componentsPrefix: 'DView',
  // 使用组件时的样式前缀名称 (可选)
  classNamePrefix: 'DV'
});
app.mount('#app');

```

### 按需引入修改样式前缀
按需引入修改样式前缀只需要在入口文件 (`main.ts/js`) 中使用`setClassPrefix()`即可
