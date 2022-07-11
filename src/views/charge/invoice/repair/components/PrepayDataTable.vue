<template>
  <el-card style="border-radius: 10px">
    <div slot="header" class="clearfix">
      <span>预交金电子票</span>
      <el-button
        icon="el-icon-magic-stick"
        size="mini"
        style="margin-left: 10px"
        type="success"
        @click="repair"
      >
        一键修复
      </el-button>
    </div>

    <!-- 数据表 -->
    <el-table
      :data="tableData"
      height="700px"
      :row-class-name="tableRowClassName"
    >
      <el-table-column prop="receiptNo" label="预交金票据号" width="180" />
      <el-table-column prop="billBatchNo" label="电子票据代码" width="180" />
      <el-table-column prop="billNo" label="电子票据号码" width="180" />
      <el-table-column prop="random" label="电子校验码" />
    </el-table>
  </el-card>
</template>

<script>
import { getPrepayInfo, fixPrepayInfo } from '@/api/prepay'

export default {
  props: {
    patient: {
      type: String,
      default: _ => { return '' }
    }
  },
  data() {
    return {
      tableData: []
    }
  },
  methods: {
    tableRowClassName({ row, rowIndex }) {
      if (row.billBatchNo === undefined || row.billBatchNo === null || row.billBatchNo === '') {
        return 'warning-row'
      } else if (row.billNo === undefined || row.billNo === null || row.billNo === '') {
        return 'warning-row'
      } else if (row.random === undefined || row.random === null || row.random === '') {
        return 'warning-row'
      } else {
        return 'success-row'
      }
    },
    refresh() {
      getPrepayInfo(this.patient).then(Response => {
        const { data } = Response
        this.tableData = data
      })
    },
    repair() {
      const funs = []

      this.tableData.forEach(item => {
        if (item.billBatchNo === undefined || item.billBatchNo === null || item.billBatchNo === '') {
          funs.push(fixPrepayInfo(item.receiptNo))
        }
      })

      Promise.all(funs).then(_ => {
        this.$message({ message: '修复完成', center: true, type: 'success' })
        this.refresh()
      })
    }
  }
}
</script>
