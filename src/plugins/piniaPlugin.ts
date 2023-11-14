import {PiniaPluginContext} from "pinia"
import Taro from "@tarojs/taro";


const piniaPlugin = () => {
  return (context: PiniaPluginContext) => {
    const {store, options} = context
    const data = JSON.parse(Taro.getStorageSync(store.$id))

    if (options.persist) {
      store.$subscribe(() => {
        Taro.setStorageSync(store.$id, JSON.stringify(store.$state))
      })
    }
    return data
  }
}

declare module 'pinia' {
  interface DefineStoreOptionsBase<S, Store> {
    persist?: boolean;
  }
}

export default piniaPlugin

