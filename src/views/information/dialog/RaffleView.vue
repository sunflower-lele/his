<template>
  <el-dialog
    :visible.sync="visible"
    :fullscreen="true"
    :show-close="false"
    custom-class="raffle-view"
  >
    <div>123</div>
  </el-dialog>
</template>

<script>
import myBus from '../js/myBus.js'

export default {
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
</style>
