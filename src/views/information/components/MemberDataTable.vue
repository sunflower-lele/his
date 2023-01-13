<template>
  <el-card style="border-radius: 10px">
    <div slot="header" class="clearfix">
      <span>{{ title }}</span>
    </div>

    <!-- 数据表 -->
    <el-table
      :data="tableData"
      height="253px"
      :row-class-name="tableRowClassName"
    >
      <el-table-column type="index" width="50" />
      <el-table-column prop="name" label="成员" />
    </el-table>

    <!-- 下标 -->
    <div style="margin-top: 10px; text-align: center">
      <el-button type="success" :loading="loading" @click="raffleList">
        批量抽奖
      </el-button>
    </div>
  </el-card>
</template>

<script>
import myBus from '../js/myBus.js'
import { raffleList } from '@/api/raffle.js'

export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    names: {
      type: Array,
      default: _ => { return [] }
    }
  },
  data() {
    return {
      tableData: [],
      loading: false // 加载
    }
  },
  mounted() {
    this.tableData = this.names.map(x => { return { name: x } })
  },
  methods: {
    // 隔行着色
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex % 2 === 0) {
        return 'success-row'
      }
    },
    // 批量抽奖
    raffleList() {
      this.loading = true
      raffleList(this.names).then(_ => {
        myBus.$emit('refresh', null)
        this.loading = false
      }).catch(_ => {
        this.loading = false
      })
    }
  }
}
</script>
