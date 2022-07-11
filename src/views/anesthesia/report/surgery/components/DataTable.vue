<template>
  <el-card style="border-radius: 10px">
    <el-table :data="data" height="540px" stripe>
      <el-table-column type="index" label="序号" width="50" fixed />
      <el-table-column prop="inDate" label="入手术室时间" width="160" />
      <el-table-column prop="roomNo" label="手术室号" width="90" />
      <el-table-column prop="surgeryName" label="手术名" width="360" />
      <el-table-column prop="level" label="手术等级" width="90" />
      <el-table-column prop="patientNo" label="住院号" width="150" />
      <el-table-column prop="name" label="患者姓名" width="150" />
    </el-table>
    <el-form class="tail" label-width="80px" :inline="true">
      <el-form-item label="总数量" prop="date">{{ data.length }}</el-form-item>
    </el-form>
  </el-card>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      default: _ => { return [] }
    }
  }
}
</script>

<style lang="scss" scoped>
.tail {
  margin-top: 10px;
  margin-bottom: -30px;
}
</style>
