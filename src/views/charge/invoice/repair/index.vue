<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="6" :xs="24">
        <patient-card :patient="patient" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import PatientCard from './components/PatientCard.vue'

export default {
  components: {
    PatientCard
  },
  data() {
    return {
      patient: {
        patientNo: '0001234567',
        name: 'test',
        avatar: '',
        location: '',
        remark: ''
      }
    }
  }
}
</script>
