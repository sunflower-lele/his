<template>
  <el-card style="border-radius: 10px">
    <div slot="header" class="clearfix">
      <span>控制面板</span>
      <el-button
        type="primary"
        size="mini"
        style="margin-left: 20px"
        @click="clickMethod('form')"
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
          value-format="yyyy-MM-dd HH:mm:ss"
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
      <!-- 条件：手术等级 -->
      <el-form-item label="手术等级">
        <el-select v-model="form.level" multiple placeholder="请选择手术等级">
          <el-option
            v-for="item in option.level"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
      <!-- 条件：住院科室 -->
      <el-form-item label="住院科室">
        <el-cascader
          v-model="form.dept"
          :options="option.dept"
          placeholder="请选择住院科室"
          :props="props"
          clearable
          filterable
          style="width: 690px"
        />
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
import { getDeptsInfo } from '@/api/department'

export default {
  data() {
    return {
      form: {
        date: '',
        patientNo: '',
        level: '',
        dept: ''
      },
      rules: {
        date: [
          { required: true, message: '请选择时间段', trigger: 'blur' }
        ]
      },
      option: {
        level: [
          {
            value: '一级',
            label: '一级'
          },
          {
            value: '二级',
            label: '二级'
          },
          {
            value: '三级',
            label: '三级'
          },
          {
            value: '四级',
            label: '四级'
          }
        ],
        dept: [
          {
            value: '南院区',
            label: '南院区',
            children: []
          },
          {
            value: '北院区',
            label: '北院区',
            children: []
          },
          {
            value: '东津院区',
            label: '东津院区',
            children: []
          }
        ]
      },
      props: {
        multiple: true
      }
    }
  },
  mounted() {
    // 初始化科室选项
    getDeptsInfo({ deptOwn: '南院区' }).then(Response => {
      const { data } = Response
      data.forEach(item => {
        this.option.dept[0].children.push({ value: item.deptCode, label: item.deptName })
      })
    }).then(
      getDeptsInfo({ deptOwn: '北院区' }).then(Response => {
        const { data } = Response
        data.forEach(item => {
          this.option.dept[1].children.push({ value: item.deptCode, label: item.deptName })
        })
      })
    ).then(
      getDeptsInfo({ deptOwn: '东津院区' }).then(Response => {
        const { data } = Response
        data.forEach(item => {
          this.option.dept[2].children.push({ value: item.deptCode, label: item.deptName })
        })
      })
    )
  },
  methods: {
    clickMethod(name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$emit('click')
        }
      })
    }
  }
}
</script>
