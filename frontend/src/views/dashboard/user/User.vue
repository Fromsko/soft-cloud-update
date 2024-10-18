<template>
  <h1>{{ desc }}</h1>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const desc = ref('这是用户界面')
</script>

<style scoped>
h1 {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: medium;
}
</style>
