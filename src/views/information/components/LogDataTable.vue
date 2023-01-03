<template>
  <el-card style="border-radius: 10px">
    <div slot="header" class="clearfix">
      <span>日志</span>
    </div>

    <!-- 数据表 -->
    <el-table
      :data="tableData"
      height="700px"
      :row-class-name="tableRowClassName"
    >
      <el-table-column type="index" width="50" />
      <el-table-column prop="name" label="姓名" width="200" />
      <el-table-column prop="feature" label="奖品" />
      <el-table-column label="操作" width="100">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="danger"
            @click="onDelete(scope.$index, scope.row)"
          >
            作废
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 下标 -->
    <div style="margin-top: 10px">
      <el-row :gutter="20">
        <!-- 输入框 -->
        <el-col :span="20" :xs="24">
          <el-input
            v-model="name"
            placeholder="请输入姓名"
            suffix-icon="el-icon-edit"
          />
        </el-col>
        <!-- 按钮 -->
        <el-col :span="4" :xs="24">
          <el-button type="success" @click="onClick">抽奖一次</el-button>
        </el-col>
      </el-row>
    </div>
  </el-card>
</template>

<script>
export default {
  props: {
    patient: {
      type: String,
      default: _ => { return '' }
    }
  },
  data() {
    return {
      tableData: [], // 表数据
      name: '' // 单抽人员姓名
    }
  },
  methods: {
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex % 2 === 0) {
        return 'success-row'
      }
    },
    onClick() {
      if (this.name === '') {
        this.$alert('姓名不能为空！')
      } else {
        this.addItem(this.name)
      }
    },
    onDelete(index, row) {
      this.$confirm('确定删除 ' + row.name + ' 的奖品？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.deleteItem(index)
        this.$message('执行删除完成')
      })
    },
    addItem(name) {
      this.tableData.push({ name: name, feature: 'test' })
    },
    deleteItem(index) {
      this.tableData.splice(index, 1)
    }
  }
}
</script>
