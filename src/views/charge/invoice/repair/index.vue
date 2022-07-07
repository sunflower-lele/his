<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="6" :xs="24">
        <inpatient-card :patient="patient" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import InpatientCard from '@/components/Cards/InpatientCard.vue'

export default {
  components: {
    InpatientCard
  },
  data() {
    return {
      patient: {
        header: {
          name: '',
          patientNo: ''
        },
        base: {
          cardNo: '',
          sex: '',
          telephone: '',
          identityNo: '',
          age: ''
        },
        hosp: {
          department: '',
          doctor: ''
        }
      }
    }
  }
}
</script>
