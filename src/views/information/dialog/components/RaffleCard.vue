<template>
  <el-card class="raffle-card">
    <el-container>
      <el-header class="v-center">次序 {{ idx + 1 }}</el-header>
      <el-main>
        <mini-card :idx="idx" :feature="feature" />
      </el-main>
      <el-footer class="v-center">
        <div>{{ name }}</div>
      </el-footer>
    </el-container>
  </el-card>
</template>

<script>
import MiniCard from './MiniCard.vue'

export default {
  components: {
    MiniCard
  },
  props: {
    idx: {
      type: Number,
      default: -1
    },
    feature: {
      type: String,
      default: '啥也没抽到呀o(╥﹏╥)o'
    },
    name: {
      type: String,
      default: '匿名(^_-)☆'
    }
  }
}
</script>

<style lang="scss" scoped>
.raffle-card {
  text-align: center;
  height: 100%;
  background-color: transparent;
}

.v-center{
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
