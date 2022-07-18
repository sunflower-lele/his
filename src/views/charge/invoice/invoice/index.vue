<template>
  <div class="app-container">
    <el-card class="el-card-panel">
      <div class="filter-container">
        <label style="margin-right: 20px">卡号</label>
        <el-input v-model="cardno" placeholder="请输入患者就诊卡号" style="width: 200px;" />
        <label style="margin-left: 20px">发票号</label>
        <el-input v-model="invoice" placeholder="请输入患者发票号" style="width: 200px;margin-left: 20px" />
        <el-button style="margin-left: 40px;" type="primary" icon="el-icon-search">{{ '查询' }}</el-button>
      </div>
      <el-table
        :data="tableData"
        style="width: 100%"
      >
        <el-table-column label="就诊卡号" prop="cardno" />
        <el-table-column label="姓名" prop="name" />
        <el-table-column label="发票号" prop="invoice" />
        <el-table-column label="金额" prop="money" />
        <el-table-column label="发票类型" prop="invoice_type" />
        <el-table-column align="center" width="360" label="操作" prop="action">
          <template>
            <el-button type="primary" @click="handleUpdate">更新打印标记</el-button>
            <el-button type="success" @click="fillOpen">补开</el-button>
            <el-button type="danger" @click="handleRush">冲红</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cardno: null,
      name: null,
      invoice: null,
      money: null,
      invoice_type: null,
      tableData: [{
        cardno: '201211111',
        name: '王小虎',
        invoice: '1212121212121212',
        money: '180.23',
        invoice_type: '门诊收费'
      }]
    }
  },
  methods: {
    handleUpdate() {
      this.$confirm('确认更新打印标记, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '更新成功!'
        })
      })
    },
    handleRush() {
      this.$confirm('确认冲红电子发票, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '冲红成功!'
        })
      })
    },
    fillOpen() {
      this.$confirm('确认补开电子发票, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '补开成功!'
        })
      })
    }
  }
}
</script>

<style>

</style>
