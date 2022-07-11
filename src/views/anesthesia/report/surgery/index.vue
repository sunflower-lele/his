<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="24" :xs="24">
        <control-panel ref="config" @click="onQuery" />
      </el-col>
    </el-row>

    <el-divider />

    <el-row :gutter="20">
      <el-col :span="24" :xs="24">
        <data-table ref="window" :data="tableData" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import ControlPanel from './components/ControlPanel.vue'
import DataTable from './components/DataTable.vue'

import { querySurgeryInfos } from '@/api/surgery'

export default {
  components: {
    ControlPanel,
    DataTable
  },
  data() {
    return {
      tableData: []
    }
  },
  methods: {
    onQuery() {
      this.$refs.window.loading = true
      // 转换多级选择器
      const depts = []
      this.$refs.config.form.dept.forEach(item => {
        depts.push(item.slice(-1)[0])
      })
      querySurgeryInfos({
        beginInDateTime: this.$refs.config.form.date[0],
        endInDateTime: this.$refs.config.form.date[1],
        patientNo: this.$refs.config.form.patientNo ? this.$refs.config.form.patientNo : null,
        levels: this.$refs.config.form.level.length > 0 ? this.$refs.config.form.level : null,
        stayedDeptCodes: depts.length > 0 ? depts : null,
        asaGrades: this.$refs.config.form.asaGrade.length > 0 ? this.$refs.config.form.asaGrade : null
      }).then(Response => {
        const { data } = Response
        this.tableData = data
        this.$refs.window.loading = false
      })
    }
  }
}
</script>
