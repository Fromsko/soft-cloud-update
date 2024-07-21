<template>
  <el-card
    class="card"
    :class="{ 'float-up': hover }"
    @mouseover="hover = true"
    @mouseleave="hover = false"
  >
    <div>
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
      <span>{{ calls }} 次调用</span>
    </div>
  </el-card>
</template>

<script>
export default {
  props: {
    title: String,
    description: String,
    calls: Number,
  },
  data() {
    return {
      hover: false,
    }
  },
}
</script>

<style>
.card {
  transition: transform 0.3s;
}

.float-up {
  transform: translateY(-10px);
}
</style>
