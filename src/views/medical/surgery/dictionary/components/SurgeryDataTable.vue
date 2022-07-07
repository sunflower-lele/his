<template>
  <!-- 数据表 -->
  <el-table
    :data="
      tableData.filter(
        (data) =>
          !search || data.icdCode.toLowerCase().includes(search.toLowerCase())
      )
    "
    height="700px"
    stripe
    highlight-current-row
  >
    <el-table-column prop="icdCode" label="ICD-9编码" width="180" sortable />
    <el-table-column prop="name" label="手术名称" width="500" />
    <el-table-column
      prop="level"
      label="手术分级"
      width="180"
      sortable
      :filters="[
        { text: '一级', value: '一级' },
        { text: '二级', value: '二级' },
        { text: '三级', value: '三级' },
        { text: '四级', value: '四级' },
      ]"
      :filter-method="levelFilterMethod"
    />
    <el-table-column prop="teleprompter" label="提词器" />
    <el-table-column align="right">
      <template slot="header" slot-scope="{}">
        <el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
      </template>
      <template slot-scope="scope">
        <el-button size="mini" @click="handleEdit(scope.row)"> Edit </el-button>
        <el-button size="mini" type="danger" @click="handleDelete(scope.row)">
          Delete
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { getDictionary, removeDictionary } from '@/api/surgery'

export default {
  data() {
    return {
      tableData: [],
      search: ''
    }
  },
  created() {
    this.refreshData()
  },
  methods: {
    refreshData() {
      return getDictionary().then(Response => {
        const { data } = Response
        this.tableData = data
      })
    },
    levelFilterMethod(value, row) {
      return row.level === value
    },
    handleEdit(row) {
      this.$parent.$parent.handleModify(row.icdCode, row.name, row.level, row.teleprompter)
    },
    handleDelete(row) {
      removeDictionary(row.icdCode).then(() => {
        this.refreshData()
      })
    }
  }
}
</script>
