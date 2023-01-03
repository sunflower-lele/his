<template>
  <div class="container">
    <el-row :gutter="20">
      <el-col :span="12" :xs="24">
        <log-data-table ref="dataTable" />
      </el-col>

      <el-col :span="12" :xs="24">
        <pool-data-table ref="dataTable" :patient="patient.patientNo" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import LogDataTable from './components/LogDataTable.vue'
import PoolDataTable from './components/PoolDataTable.vue'

export default {
  components: {
    LogDataTable,
    PoolDataTable
  },
  data() {
    return {
      patient: {
        patientNo: '',
        cardNo: '',
        name: '',
        sex: '',
        telephone: '',
        identityNo: '',
        age: '',
        department: '',
        doctor: ''
      }
    }
  },
  methods: {
  }
}
</script>

<style scoped>
.container {
  padding: 20px;
}
</style>
