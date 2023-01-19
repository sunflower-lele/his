<template>
  <el-card class="myCard">
    <div class="content">{{ feature }}</div>
    <el-divider />
    <div class="title">{{ name }}</div>
  </el-card>
</template>

<script>
export default {
  props: {
    feature: {
      type: String,
      default: '123'
    },
    name: {
      type: String,
      default: '覃鹏展'
    }
  }
}
</script>

<style lang="scss" scoped>
.myCard {
  border-radius: 10px;
}

.myCard .content {
  text-align: center;
  height: 200px;
}

.myCard .title {
  text-align: center;
}
</style>
