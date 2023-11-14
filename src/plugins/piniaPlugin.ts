import {PiniaPluginContext} from "pinia"
import Taro from "@tarojs/taro";

interface Storage {
  read: (key: string) => any
  write: (key: string, value: any) => void
}

const piniaPlugin = () => {
  let storageAPI: Storage = initStorageAPI();

  return (context: PiniaPluginContext) => {
    const {store, options} = context
    const data = storageAPI.read(store.$id)

    if (options.persist) {
      store.$subscribe(() => {
        storageAPI.write(store.$id, JSON.stringify(store.$state))
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


function initStorageAPI(): Storage {
  if (Taro.getEnv() == 'WEB') {
    return {
      read(key: string): any {
        let result = localStorage.getItem(key)
        return JSON.parse(result === null ? "{}" : result);
      },

      write(key: string, value: any): void {
        localStorage.setItem(key, JSON.stringify(value))
      }
    }
  } else {
    return {
      read(key: string): any {
        return JSON.parse(Taro.getStorageSync(key))
      },

      write(key: string, value: any): void {
        localStorage.setItem(key, JSON.stringify(value))
      }
    }
  }
}

export default piniaPlugin

