<template>
  <el-card style="border-radius: 10px">
    <div slot="header" class="clearfix">
      <span>预交金电子票</span>
      <el-button
        icon="el-icon-refresh"
        size="mini"
        style="margin-left: 10px"
        circle
        @click="repair"
      />
    </div>

    <!-- 数据表 -->
    <el-table
      :data="tableData"
      height="700px"
      :row-class-name="tableRowClassName"
      stripe
    >
      <el-table-column prop="recipeNo" label="预交金票据号" width="180" />
      <el-table-column prop="billBatchCode" label="电子票据代码" width="180" />
      <el-table-column prop="billNo" label="电子票据号码" width="180" />
      <el-table-column prop="random" label="电子校验码" />
    </el-table>
  </el-card>
</template>

<script>
export default {
  props: {
    patientNo: {
      type: String,
      default: _ => { return '' }
    }
  },
  data() {
    return {
      tableData: []
    }
  },
  created() {
    this.refreshData()
  },
  methods: {
    tableRowClassName({ row, rowIndex }) {
      if (row.billBatchCode === undefined || row.billBatchCode === null || row.billBatchCode === '') {
        return 'warning-row'
      } else if (row.billNo === undefined || row.billNo === null || row.billNo === '') {
        return 'warning-row'
      } else if (row.random === undefined || row.random === null || row.random === '') {
        return 'warning-row'
      } else {
        return 'success-row'
      }
    },
    refreshData() {
      this.tableData = [
        {
          recipeNo: '1',
          billBatchCode: '2',
          billNo: '3',
          random: '4'
        }
      ]
    },
    repair() {
      this.refreshData()
    }
  }
}
</script>
