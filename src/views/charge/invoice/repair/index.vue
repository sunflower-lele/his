<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="6" :xs="24">
        <inpatient-card :patient="patient" :change="changePatient" />
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
    changePatient() {
      this.$message('test')
    }
  }
}
</script>
