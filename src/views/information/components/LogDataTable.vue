<template>
  <el-card style="border-radius: 10px">
    <div slot="header" class="clearfix">
      <span>抽奖日志</span>
    </div>

    <!-- 数据表 -->
    <el-table
      ref="logTable"
      :data="tableData"
      height="700px"
      :row-class-name="tableRowClassName"
    >
      <el-table-column type="index" width="50" />
      <el-table-column v-if="false" prop="key" label="主键" />
      <el-table-column prop="name" label="姓名" width="200" />
      <el-table-column prop="feature" label="奖品" />
    </el-table>

    <!-- 下标 -->
    <div style="margin-top: 10px">
      <div style="text-align: center">
        <el-button type="success" :loading="loading" @click="cancelAll">
          归还所有奖品
        </el-button>
      </div>
    </div>
  </el-card>
</template>

<script>
import myBus from '../js/myBus.js'
import { queryRaffleLogs, cancelAll } from '@/api/Raffle.js'

export default {
  data() {
    return {
      tableData: [], // 表数据
      loading: false
    }
  },
  mounted() {
    // 日志更新
    myBus.$on('refresh', _ => {
      queryRaffleLogs().then(Response => {
        const { data } = Response
        this.tableData = data
      }).then(_ => {
        var tbl = this.$refs.logTable.bodyWrapper
        tbl.scrollTop = tbl.scrollHeight
      })
    })
  },
  methods: {
    // 隔行着色
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex % 2 === 0) {
        return 'success-row'
      }
    },
    // 归还
    cancelAll() {
      this.loading = true
      cancelAll().then(_ => {
        myBus.$emit('refresh', null)
        this.loading = false
      })
    }
  }
}
</script>
