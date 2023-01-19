<template>
  <div class="container">
    <el-row :gutter="20">
      <el-col :span="8" :xs="24">
        <log-data-table ref="dataTable" :names="allPoolNames" />
      </el-col>

      <el-col :span="8" :xs="24">
        <pool-data-table ref="dataTable" />
      </el-col>

      <el-col :span="8" :xs="24">
        <member-data-table
          ref="dataTable"
          :title="devPoolTitle"
          :names="devPoolNames"
        />
        <el-divider />
        <member-data-table
          ref="dataTable"
          :title="allPoolTitle"
          :names="allPoolNames"
        />
      </el-col>
    </el-row>

    <raffle-view />
  </div>
</template>

<script>
import LogDataTable from './components/LogDataTable.vue'
import PoolDataTable from './components/PoolDataTable.vue'
import MemberDataTable from './components/MemberDataTable.vue'
import RaffleView from './dialog/RaffleView.vue'
import myBus from './js/myBus.js'

export default {
  components: {
    LogDataTable,
    PoolDataTable,
    MemberDataTable,
    RaffleView
  },
  data() {
    return {
      devPoolTitle: '开发人员',
      devPoolNames: [
        '覃鹏展',
        '赵庆中',
        '汪富康',
        '庄屹东'
      ],
      allPoolTitle: '科室成员',
      allPoolNames: [
        '刘晓东',
        '刘洋',
        '朱旭玮',
        '张智慧',
        '潘学杰',
        '潘长虹',
        '陈宁',
        '陈碧波',
        '贺春',
        '田丽丽',
        '闫志飞',
        '杨海波',
        '曾方泽',
        '黎伟',
        '巩昕昊',
        '王伟',
        '程泉',
        '郑超',
        '赵庆中',
        '陈卓',
        '庄屹东',
        '戢凯',
        '覃鹏展',
        '王亮',
        '牛乐',
        '刘南鋆',
        '潘峥',
        '唐富明',
        '汪富康',
        '刘天韵',
        '刘杨文昊',
        '魏巍'
      ]
    }
  },
  mounted() {
    myBus.$emit('refresh', null)
  }
}
</script>

<style language="scss" scoped>
.container {
  padding: 20px;
}
</style>
