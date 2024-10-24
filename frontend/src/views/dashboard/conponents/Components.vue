<template>
  <div class="welcome">
    <div class="content">
      <div class="sub-title">欢迎体验</div>
      <div class="title">CSS</div>
      <div class="card">这是组件页面</div>
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
    height: 200px;
    width: 300px;
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(18.5px);
    -webkit-backdrop-filter: blur(18.5px);
    border: 0px solid rgba(255, 255, 255, 0.18);
    box-shadow: rgba(142, 142, 142, 0.19) 0px 6px 15px 0px;
    -webkit-box-shadow: rgba(142, 142, 142, 0.19) 0px 6px 15px 0px;
    border-radius: 25px;
    -webkit-border-radius: 25px;
    color: rgb(255, 255, 255);

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
  }
  .img {
    margin-right: 50px;
    background-image: url('../assets/images/qq-logo.png');
    width: 250px;
    height: 300px;
  }
}
</style>
