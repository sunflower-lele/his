<template>
  <el-card style="border-radius: 10px">
    <div slot="header" class="clearfix">
      <span>奖品池 (剩余 {{ remain }} 个)</span>
    </div>

    <!-- 数据表 -->
    <el-table
      :data="tableData"
      height="700px"
      :row-class-name="tableRowClassName"
    >
      <el-table-column type="index" width="50" />
      <el-table-column prop="feature" label="奖品" />
      <el-table-column prop="count" label="数量" />
    </el-table>

    <!-- 下标 -->
    <div style="margin-top: 10px; text-align: center">
      <el-row :gutter="20">
        <!-- 输入框 -->
        <el-col :span="12" :xs="24">
          <el-input
            v-model="feature"
            placeholder="请输入奖品"
            suffix-icon="el-icon-edit"
            clearable="true"
          />
        </el-col>
        <el-col :span="7" :xs="24">
          <el-input v-model="count" placeholder="请输入数量">
            <template slot="prepend">数量</template>
          </el-input>
        </el-col>
        <!-- 按钮 -->
        <el-col :span="5" :xs="24">
          <el-button type="success" :loading="loading" @click="addFeature">
            添加奖品
          </el-button>
        </el-col>
      </el-row>
    </div>
  </el-card>
</template>

<script>
import myBus from '../js/myBus.js'
import { queryFeaturePool, addFeature } from '@/api/raffle.js'

export default {
  data() {
    return {
      tableData: [], // 表数据
      feature: '', // 奖品名称
      count: 1, // 奖品数量
      loading: false, // 加载
      remain: 0
    }
  },
  mounted() {
    // 奖池更新
    myBus.$on('refresh', _ => {
      queryFeaturePool().then(Response => {
        const { data } = Response
        this.tableData = data
        this.remain = 0
        this.tableData.forEach(x => {
          this.remain += x.count
        })
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
    // 添加奖品
    addFeature() {
      this.loading = true
      addFeature(this.feature, this.count).then(_ => {
        myBus.$emit('refresh', null)
        this.loading = false
      }).catch(_ => {
        this.loading = false
      })
    }
  }
}
</script>
