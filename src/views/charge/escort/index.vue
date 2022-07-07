<template>
  <div class="app-container">
    <el-card class="el-card-panel">
      <div class="filter-container">
        <el-input
          v-model="cardno"
          placeholder="请输入患者就诊卡号"
          style="width: 200px"
        />
        <el-button
          style="margin-left: 10px"
          type="primary"
          icon="el-icon-search"
          @click="search()"
        >查询</el-button>
      </div>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column label="就诊卡号" prop="cardNo" />
        <el-table-column label="姓名" width="90" prop="name" />
        <el-table-column label="性别" width="60" prop="sex" />
        <el-table-column label="年龄" width="80" prop="age" />
        <el-table-column label="身份证号" width="160" prop="ideno" />
        <el-table-column label="电话号码" prop="phone" />
        <el-table-column label="电子邮箱" width="140" prop="email" />
        <el-table-column label="GCP患者" width="80" prop="gcp" />
        <el-table-column align="center" width="340" label="操作" prop="action">
          <template>
            <el-button
              type="primary"
              @click="handleAdd()"
            >绑定陪护人</el-button>
            <el-button
              type="success"
              @click="handleDialog"
            >查看陪护人</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-dialog :visible.sync="peihuVisable" custom-class="el-dialog-aside">
        <div v-if="flag">
          <div
            v-for="i in list"
            :key="i"
            class="peihu"
            style="border: 2px solid #cfcfcf; margin-bottom: 20px"
          >
            <el-form
              ref="dataForm"
              label-position="left"
              label-width="100px"
              style="width: 300px; margin-left: 20px; margin-top: 20px"
            >
              <el-form-item label="陪护证号" prop="peihuno">
                <el-input
                  v-model="dataForm.escortNo"
                  disabled
                  style="width: 260px"
                />
              </el-form-item>
              <el-form-item label="陪护人卡号" prop="peihucardno">
                <el-input
                  v-model="dataForm.cardNo"
                  disabled
                  style="width: 260px"
                />
              </el-form-item>
              <el-form-item label="姓名" prop="peihname">
                <el-input
                  v-model="dataForm.name"
                  disabled
                  style="width: 260px"
                />
              </el-form-item>
              <el-form-item label="性别" prop="peihusex">
                <el-input
                  v-model="dataForm.sex"
                  disabled
                  style="width: 260px"
                />
              </el-form-item>
              <el-form-item label="年龄" prop="peihuage">
                <el-input
                  v-model="dataForm.age"
                  disabled
                  style="width: 260px"
                />
              </el-form-item>
            </el-form>
            <el-button
              type="primary"
              style="display: block; margin: 0 auto; margin-bottom: 20px"
              @click="logout"
            >
              注销陪护人
            </el-button>
          </div>
        </div>
        <h2 v-else style="">无陪护人信息</h2>
      </el-dialog>
    </el-card>
  </div>
</template>

<script>
// import { MessageBox } from 'element-ui';
import { escortList, escortBind, escortUpdateState } from '@/api/escort'

export default {
  data() {
    return {
      cardno: null,
      peihuno: null,
      peihucardno: null,
      peihname: null,
      peihusex: null,
      peihuage: null,
      tableData: null,
      list: [1, 2],
      peihuVisable: false,
      dataForm: {
        escortNo: '',
        name: '',
        age: '',
        sex: ''
      },
      flag: true
    }
  },

  // 在创建页面时执行方法
  // created(){
  //   this.fetchData()
  // },

  methods: {
    // 获取后端接口数据
    search() {
      escortList(this.cardno).then((Response) => {
        const { data } = Response
        this.tableData = data
      })
    },
    handleAdd() {
      this.$prompt('请输入陪护人卡号', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        center: true
      }).then(({ value }) => {
        escortBind(this.cardno, value).then((Response) => {
          this.$messag({
            type: 'success',
            message: '绑定成功'
          })
        })
      })
    },
    handleDialog() {
      this.peihuVisable = true
      escortList(this.cardno).then((Response) => {
        const { data } = Response
        this.dataForm.escortNo = data.escortNo
      })
    },
    logout() {
      this.$confirm('确认注销陪护人, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        escortUpdateState(this.cardno, 4).then((Response) => {

        })
        this.$message({
          type: 'success',
          message: '注销成功!'
        })
      })
    }
  }
}
</script>

<style scoped lang="scss">
.app-container {
  .el-card-panel {
    height: 100%;
    .filter-container {
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }
    .dialog-footer {
      text-align: center;
    }
  }
}
</style>
