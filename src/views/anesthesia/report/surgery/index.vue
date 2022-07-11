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
        <data-table :data="tableData" />
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
      querySurgeryInfos({
        beginInDateTime: this.$refs.config.form.date[0],
        endInDateTime: this.$refs.config.form.date[1]
      }).then(Response => {
        const { data } = Response
        this.tableData = data
      })
    }
  }
}
</script>
