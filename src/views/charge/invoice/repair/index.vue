<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="6" :xs="24">
        <inpatient-card :data="patient" @click="dialogVisible = true" />
      </el-col>
    </el-row>

    <!-- 会话 -->
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose"
    >
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">
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
      dialogVisible: false
    }
  },
  methods: {
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => { })
    }
  }
}
</script>
