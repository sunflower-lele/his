<template>
  <el-card style="border-radius: 10px">
    <div slot="header" class="clearfix">
      <span>控制面板</span>
      <el-button
        type="primary"
        size="mini"
        style="margin-left: 20px"
        @click="submitForm('form')"
      >
        查询
      </el-button>
    </div>

    <!-- 控制器 -->
    <el-form
      ref="form"
      :model="form"
      label-width="80px"
      :inline="true"
      :rules="rules"
    >
      <!-- 条件：时间段 -->
      <el-form-item label="时间区间" prop="date">
        <el-date-picker
          v-model="form.date"
          type="datetimerange"
          align="right"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          :default-time="['00:00:00', '23:59:59']"
        />
      </el-form-item>
      <!-- 条件：住院号 -->
      <el-form-item label="住院号">
        <el-input
          v-model="form.patientNo"
          placeholder="请输入住院号"
          clearable
        />
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      form: {
        date: '',
        patientNo: ''
      },
      rules: {
        date: [
          { required: true, message: '请选择时间段', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm(name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$emit('click')
        }
      })
    }
  }
}
</script>
