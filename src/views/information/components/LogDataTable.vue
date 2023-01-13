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
      <el-table-column prop="name" label="姓名" width="100" />
      <el-table-column prop="feature" label="奖品" />
      <el-table-column label="操作" width="100">
        <template slot-scope="scope">
          <el-button size="mini" type="danger" @click="cancel(scope.row)">
            退还奖品
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 下标 -->
    <div style="margin-top: 10px; text-align: center">
      <el-row :gutter="20">
        <!-- 输入框 -->
        <el-col :span="14" :xs="24">
          <el-input
            v-model="name"
            placeholder="请输入姓名"
            suffix-icon="el-icon-edit"
          />
        </el-col>
        <!-- 按钮 -->
        <el-col :span="4" :xs="24">
          <el-button type="success" @click="raffleOnce">单抽</el-button>
        </el-col>
        <!-- 归还按钮 -->
        <el-col :span="6" :xs="24">
          <el-button type="success" :loading="loading" @click="cancelAll">
            归还所有奖品
          </el-button>
        </el-col>
      </el-row>
    </div>
  </el-card>
</template>

<script>
import myBus from '../js/myBus.js'
import { queryRaffleLogs, raffleOnce, cancel, cancelAll } from '@/api/raffle.js'

export default {
  data() {
    return {
      tableData: [], // 表数据
      loading: false, // 加载
      name: '' // 抽奖人
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
    // 单抽
    raffleOnce() {
      this.loading = true
      raffleOnce(this.name).then(_ => {
        myBus.$emit('refresh', null)
        this.loading = false
      }).catch(_ => {
        this.loading = false
      })
    },
    // 退还单个
    cancel(row) {
      this.loading = true
      cancel(row.key).then(_ => {
        myBus.$emit('refresh', null)
        this.loading = false
      })
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
