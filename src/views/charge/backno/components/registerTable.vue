<template>
  <el-card style="border-radius: 10px; margin-top: 20px; margin-right: 20px">
    <div slot="header" class="clearfix">
      <span>门诊患者近三天挂号数据</span>
    </div>

    <!-- 数据表 -->
    <el-table
      :data="tableData"
      height="700px"
      :row-class-name="tableRowClassName"
    >
      <el-table-column prop="cliniccode" label="流水号" width="180" />
      <el-table-column prop="invoiceno" label="发票号" width="180" />
      <el-table-column prop="money" label="金额" width="100" />
      <el-table-column prop="regdate" label="挂号时间" width="220" />
      <el-table-column align="center" width="240" label="操作" prop="action">
        <template>
          <el-button type="primary" @click="cancelNo">退号</el-button>
        </template>
      </el-table-column>
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
      tableData: [{
        cliniccode: 1212111,
        invoiceno: 12121111111,
        money: 23,
        regdate: '2022-07-12'
      },
      {
        cliniccode: 1212111,
        invoiceno: 12121111111,
        money: 23,
        regdate: '2022-07-12'
      }
      ]
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
