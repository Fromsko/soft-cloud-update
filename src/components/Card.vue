<template>
  <div class="col-sm-4">
    <div class="block block-link-hover2 ribbon ribbon-modern ribbon-success">
      <div class="ribbon-box font-w600">{{ calls }}</div>
      <div class="block-content">
        <div class="h4 push-5">{{ title }}</div>
        <p class="text-muted">{{ description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    description: String,
    calls: Number,
  },
}
</script>

<style></style>
