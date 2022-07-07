<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="6" :xs="24">
        <dept-card :dept="dept" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import DeptCard from './components/DeptCard.vue'

export default {
  components: {
    DeptCard
  },
  data() {
    return {
      dept: {
        code: '100',
        name: '眼科',
        avatar: 'http://172.16.100.252:8025/api/user/avatar?userCode=0306',
        location: '行政楼6楼',
        remark: 'test'
      }
    }
  }
}
</script>
