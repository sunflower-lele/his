<template>
  <el-card style="border-radius: 10px">
    <el-table :data="data" height="540px" stripe>
      <el-table-column type="index" label="序号" width="50" fixed />
      <el-table-column prop="receiptNo" label="预交金票据号" width="180" />
      <el-table-column prop="billBatchNo" label="电子票据代码" width="180" />
      <el-table-column prop="billNo" label="电子票据号码" width="180" />
      <el-table-column prop="billNo" label="电子票据号码" width="180" />
      <el-table-column prop="billNo" label="电子票据号码" width="180" />
      <el-table-column prop="billNo" label="电子票据号码" width="180" />
      <el-table-column prop="billNo" label="电子票据号码" width="180" />
      <el-table-column prop="billNo" label="电子票据号码" width="180" />
      <el-table-column prop="billNo" label="电子票据号码" width="180" />
      <el-table-column prop="billNo" label="电子票据号码" width="180" />
      <el-table-column prop="random" label="电子校验码" />
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
