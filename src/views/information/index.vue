<template>
  <div class="container">
    <el-row :gutter="20">
      <el-col :span="8" :xs="24">
        <log-data-table ref="dataTable" />
      </el-col>

      <el-col :span="8" :xs="24">
        <pool-data-table ref="dataTable" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import LogDataTable from './components/LogDataTable.vue'
import PoolDataTable from './components/PoolDataTable.vue'
import myBus from './js/myBus.js'

export default {
  components: {
    LogDataTable,
    PoolDataTable
  },
  data() {
    return {
    }
  },
  mounted() {
    myBus.$emit('refresh', null)
  }
}
</script>

<style scoped>
.container {
  padding: 20px;
}
</style>
