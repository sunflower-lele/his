<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="6" :xs="24">
        <inpatient-card :data="patient" @click="dialogVisible = true" />
      </el-col>
    </el-row>

    <!-- 会话 -->
    <el-dialog title="输入住院号" :visible.sync="dialogVisible" width="30%">
      <div style="margin-left: 80px; margin-right: 80px">
        <el-input v-model="dialogResult" placeholder="请输入住院号">
          <template slot="prepend">ZY01000</template>
        </el-input>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="handleDialogConfirm">
          确 定
        </el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import InpatientCard from '@/components/Cards/InpatientCard.vue'

import { getInpatientInfo, getPatientInfo } from '@/api/patient'
import { getDeptInfo } from '@/api/department'

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
      },
      dialogVisible: false,
      dialogResult: ''
    }
  },
  methods: {
    handleDialogConfirm() {
      getInpatientInfo('000' + this.dialogResult).then((Response) => {
        const { data } = Response
        this.patient.patientNo = data.patientNo
        this.patient.cardNo = data.cardNo
        this.patient.department = data.deptCode
        this.patient.doctor = data.docCode
      }).then(_ => {
        getPatientInfo(this.patient.cardNo).then(Response => {
          const { data } = Response
          this.patient.name = data.name
          this.patient.sex = data.sex
          this.patient.telephone = data.tel
          this.patient.identityNo = data.idenNo
          this.patient.age = data.age
        })
      }).then(_ => {
        getDeptInfo(this.patient.department).then(Response => {
          const { data } = Response
          this.patient.department = data.deptName
        })
      }).then(_ => {
        this.$refs.dataTable.refresh()
        this.dialogVisible = false
      })
    }
  }
}
</script>
