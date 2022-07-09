<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="24" :xs="24">
        <control-panel @click="test" />
      </el-col>
    </el-row>

    <el-divider />

    <el-row :gutter="20">
      <el-col :span="24" :xs="24">
        <data-table :data="tableData" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import ControlPanel from './components/ControlPanel.vue'
import DataTable from './components/DataTable.vue'

export default {
  components: {
    ControlPanel,
    DataTable
  },
  data() {
    return {
      tableData: []
    }
  },
  methods: {
    test() {
    }
  }
}
</script>
