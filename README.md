# Taro-Vue3-Pinia-Weapp-TS Demo

适用于微信小程序开发的Demo

## 1. 改动

1. 安装了`@tarojs/plugin-html`，将部分原生元素转换为小程序元素

2. 安装了`pinia`，这是一个非常跨组件状态管理库。支持Composing API

   > 根据需要自行编写了一个持久化插件，可以在store被改动时将对象序列化到storage中。

3. 启用了CSS Module，这是Vue3的`scope`属性无法在Taro小程序中使用的一个替代

4. 关闭了默认的文件拼写检查

5. 加入了`TaroUI`，作为Taro的一个UI库还是很好的

## 2. 开始

1. 跳转到/src/pages/index/index.vue
2. 查看源码并修改之。