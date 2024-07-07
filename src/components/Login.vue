<template>
  <h1>登陆页面</h1>
  <el-button @click="goHome">回去主页</el-button>
</template>

<script>
export default {
  name: 'login',
  mounted() {
    this.$request.get('/login', { name: 'fromsko' }).then((res) => {
      console.log(res)
    })
  },
  methods: {
    goHome() {
      this.$router.push('/welcome')
    },
  },
}
</script>

<style></style>
