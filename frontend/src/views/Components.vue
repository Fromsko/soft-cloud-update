<template>
  <div class="welcome">
    <div class="content">
      <div class="sub-title">欢迎体验</div>
      <div class="title">CSS</div>
      <div class="desc">这是组件页面</div>
    </div>
    <div class="img"></div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.welcome {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  .content {
    position: relative;
    .sub-title {
      font-size: 30px;
      line-height: 42px;
      color: #333;
    }
    .title {
      font-size: 40px;
      line-height: 62px;
      color: #409eff;
    }
    .desc {
      text-align: right;
      font-size: 14px;
      color: #999;
    }
  }
  .img {
    margin-right: 50px;
    background-image: url('../assets/images/qq-logo.png');
    width: 250px;
    height: 300px;
  }
}
</style>
