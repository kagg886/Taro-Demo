import {createApp} from 'vue'
import {createPinia} from 'pinia'

import './app.scss'
import {createUI} from "taro-ui-vue3";
import 'taro-ui-vue3/dist/style/index.scss'
import piniaPlugin from "@/plugins/piniaPlugin";

const App = createApp({
  onShow(options: any) {
    console.log(options)
  },
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})
App.use(createUI())
App.use(createPinia().use(piniaPlugin()))

export default App
