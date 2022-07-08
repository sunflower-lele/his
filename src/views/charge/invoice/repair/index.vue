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

export default {
  components: {
    InpatientCard
  },
  data() {
    return {
      patient: {},
      dialogVisible: false,
      dialogResult: ''
    }
  },
  methods: {
    handleDialogConfirm() {
      this.$message('000' + this.dialogResult)
      this.dialogVisible = false
    }
  }
}
</script>
