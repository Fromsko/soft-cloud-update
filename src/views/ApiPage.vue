<template>
  <div>
    <div>
      {{ $route.params }}
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'

// import { defineProps, onMounted, ref } from 'vue'
// import { useRoute, useRouter } from 'vue-router'

let route = useRoute()

console.log('测试： ', route.params)
</script>

<style scoped></style>
