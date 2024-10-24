<template>
  <div class="dashboard">
    <div class="welcome">
      <div class="content">
        <div class="title">通用后台管理系统</div>
      </div>
      <div class="img"></div>
    </div>

    <div class="cards">
      <div class="card">
        <h3>用户统计</h3>
        <p>当前用户：500</p>
        <p>新注册用户：20</p>
      </div>
      <div class="card">
        <h3>销售额</h3>
        <p>总销售：¥10,000</p>
        <p>今日销售：¥1,200</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.dashboard {
  padding: 20px;
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
  }

  .cards {
    display: flex;
    justify-content: space-around;
    margin-top: 20px;

    .card {
      background-color: #fff;
      border-radius: 10px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
      padding: 20px;
      width: 300px;
      text-align: center;

      h3 {
        font-size: 20px;
        margin-bottom: 10px;
      }

      p {
        font-size: 16px;
        color: #666;
      }
    }
  }
}
</style>
