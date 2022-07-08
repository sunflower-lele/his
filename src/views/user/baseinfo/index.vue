<template>
  <div class="app-container">
    <el-button type="primary" @click="handleAddRole">新建用户</el-button>
    <el-table :data="rolesList" style="width: 100%; margin-top: 30px">
      <el-table-column align="center" label="用户代码" width="220">
        <template slot-scope="scope">
          {{ scope.row.key }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="用户名称" width="220">
        <template slot-scope="scope">
          {{ scope.row.rolename }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="身份证号">
        <template slot-scope="scope">
          {{ scope.row.ideno }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="出生日期">
        <template slot-scope="scope">
          {{ scope.row.birthday }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="性别">
        <template slot-scope="scope">
          {{ scope.row.sex }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="邮箱">
        <template slot-scope="scope">
          {{ scope.row.email }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="联系电话">
        <template slot-scope="scope">
          {{ scope.row.phone }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="头像">
        <template slot-scope="scope">
          {{ scope.row.image }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="操作">
        <template slot-scope="scope">
          <el-button type="primary" icon="el-icon-edit" size="small" @click="handleEdit(scope)">
            编辑
          </el-button>
          <el-button type="danger" icon="el-icon-delete" size="small" @click="handleDelete(scope)">
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog
      :title="dialogType === 'isnew' ? '新建角色' : '编辑角色'"
      :visible.sync="dialogFormVisible"
      width="30%"
    >
      <el-form :model="form" :label-position="labelPosition" label-width="80px">
        <el-form-item label="角色代码">
          <el-input v-model="form.code" autocomplete="off" />
        </el-form-item>
        <el-form-item label="角色名称">
          <el-input v-model="form.name" autocomplete="off" />
        </el-form-item>
        <el-form-item label="角色描述">
          <el-input v-model="form.description" autocomplete="off" />
        </el-form-item>
      </el-form>
      <div style="text-align: right">
        <el-button type="danger" @click="cancelVisible = false">取消</el-button>
        <el-button type="primary" @click="confirmRoleinfo">确认
        </el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { getRoles, addRole, updateRole, deleteRole } from '@/api/user-permission'

export default {
  data() {
    return {
      rolesList: [{
        key: '1011',
        rolename: '药学部',
        description: '描述'
      }, {
        key: '1012',
        rolename: '影像部',
        description: '描述'
      }],
      dialogType: 'new',
      labelPosition: 'left',
      dialogFormVisible: false,
      cancelVisible: false,
      form: {
        code: '',
        name: '',
        description: ''
      }
    }
  },

  methods: {
    handleAddRole() {
      this.dialogType = 'isnew'
      this.dialogFormVisible = 'true'
    },
    handleEdit(scope) {
      this.dialogType = 'edit'
      this.dialogFormVisible = 'true'
    },
    confirmRoleinfo() {
      // 根据type不同，掉不同的接口
      const isnew = this.dialogType === 'isnew'
      if (isnew) {
        addRole()
        updateRole()
        getRoles()
        deleteRole()
      }
      this.dialogFormVisible = 'false'
    },
    handleDelete(scope) {
      this.$confirm('确认删除角色, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
      })
    }
  }
}
</script>

<style scoped>
.el-table {
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}
</style>
