<template>
  <el-dialog
    :visible.sync="visible"
    :fullscreen="true"
    :show-close="false"
    custom-class="raffle-view"
    :destroy-on-close="true"
  >
    <div class="container">
      <el-carousel
        :type="'card'"
        :autoplay="false"
        :height="'500px'"
        :indicator-position="'none'"
        :initial-index="-1"
        @change="change"
      >
        <el-carousel-item v-for="(item, index) in data" :key="item">
          <raffle-card :idx="index" :name="item.name" :feature="item.feature" />
        </el-carousel-item>
      </el-carousel>
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
      // 初始化数据
      this.data = [{
        name: 'n1',
        feature: 'f1'
      }, {
        name: 'n2',
        feature: 'f2'
      }, {
        name: 'n3',
        feature: 'f3'
      }]

      // 启动会话
      this.visible = true
    })
  },
  methods: {
    change(curIdx, orgIdx) {
      myBus.$emit('rolling', curIdx)
    }
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
  margin-left: 10%;
  margin-right: 10%;
  height: 90vh;
  justify-content: center;
  align-items: center;
  padding-top: 15vh;
}

::v-deep .el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

::v-deep .el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
