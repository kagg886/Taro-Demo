<template>
  <div>
    <h1>The Count is {{ count }}</h1>
    <div :class="styles.hor">
      <AtButton :class="styles.btn" @click="count += 1">add</AtButton>
      <AtButton :class="styles.btn" @click="count = 0">zero</AtButton>
    </div>
  </div>
</template>

<script lang="ts" setup>
import styles from './index.scss'
import {useCounterStore} from "@/stores/counter";
import {toRefs} from "vue";

const counter = useCounterStore()
const {count} = toRefs(counter)
console.log('sss')
</script>
