<template>
  <el-card style="border-radius: 10px">
    <div slot="header" class="clearfix">
      <span>奖品池</span>
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
    <div style="margin-top: 10px">
      <el-row :gutter="20">
        <!-- 输入框 -->
        <el-col :span="15" :xs="24">
          <el-input
            v-model="feature"
            placeholder="请输入奖品"
            suffix-icon="el-icon-edit"
            clearable="true"
          />
        </el-col>
        <el-col :span="5" :xs="24">
          <el-input v-model="count" placeholder="请输入数量">
            <template slot="prepend">数量</template>
          </el-input>
        </el-col>
        <!-- 按钮 -->
        <el-col :span="4" :xs="24">
          <el-button type="success" @click="onClick">添加奖品</el-button>
        </el-col>
      </el-row>
    </div>
  </el-card>
</template>

<script>
import myBus from '../js/myBus.js'

export default {
  props: {
    patient: {
      type: String,
      default: _ => { return '' }
    }
  },
  data() {
    return {
      tableData: [], // 表数据
      feature: '', // 单抽人员姓名
      count: 1
    }
  },
  methods: {
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex % 2 === 0) {
        return 'success-row'
      }
    },
    onClick() {
      if (this.feature.length === 0) {
        this.$alert('奖品不能为空！')
      } else if (this.count === 0 || this.count.length === 0) {
        this.$alert('奖品数量不能为空！')
      } else {
        this.addItem(this.feature, this.count)
      }
    },
    addItem(feature, count) {
      this.tableData.push({ feature: feature, count: count })
      myBus.$emit('poolUpdate', this.tableData)
    }
  }
}
</script>
