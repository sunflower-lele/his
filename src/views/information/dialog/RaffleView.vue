<template>
  <el-dialog
    :visible.sync="visible"
    :fullscreen="true"
    :show-close="false"
    custom-class="raffle-view"
  >
    <div class="container">
      <!-- 第一行 -->
      <el-row :gutter="50">
        <el-col :span="5">
          <raffle-card />
        </el-col>
        <el-col :span="5">
          <raffle-card />
        </el-col>
        <el-col :span="5">
          <raffle-card />
        </el-col>
        <el-col :span="5">
          <raffle-card />
        </el-col>
        <el-col :span="5">
          <raffle-card />
        </el-col>
      </el-row>
      <!-- 第二行 -->
      <el-row :gutter="50">
        <el-col :span="5">
          <raffle-card />
        </el-col>
        <el-col :span="5">
          <raffle-card />
        </el-col>
        <el-col :span="5">
          <raffle-card />
        </el-col>
        <el-col :span="5">
          <raffle-card />
        </el-col>
        <el-col :span="5">
          <raffle-card />
        </el-col>
      </el-row>
    </div>
  </el-dialog>
</template>

<script>
import myBus from '../js/myBus.js'
import RaffleCard from './components/RaffleCard.vue'

export default {
  components: {
    RaffleCard
  },
  data() {
    return {
      visible: false,
      data: []
    }
  },
  mounted() {
    myBus.$on('showRaffle', (data) => {
      this.data = data
      this.visible = true
    })
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
::v-deep .el-dialog.raffle-view {
  .el-dialog__header {
    display: none;
  }
}

::v-deep .container {
  margin-top: 80px;
  margin-left: 10%;
  margin-right: 10%;
}

::v-deep .el-col-5 {
  width: 20%;
}

::v-deep .el-row {
  margin-top: 60px;
  margin-bottom: 60px;
}
</style>
