<template>
  <el-card style="border-radius: 10px">
    <el-table
      v-loading="loading"
      :data="data"
      max-height="500px"
      :highlight-current-row="true"
      stripe
    >
      <el-table-column type="index" label="序号" width="50" fixed />
      <el-table-column
        prop="date"
        label="手术日期"
        width="160"
        sortable
      />
      <el-table-column prop="roomNo" label="手术室号" width="100" sortable />
      <el-table-column prop="surgeryName" label="手术名" width="360" />
      <el-table-column prop="level" label="手术等级" width="90" />
      <el-table-column prop="asaGrade" label="ASA分级" width="90" />
      <el-table-column prop="inciType" label="切口等级" width="90" />
      <el-table-column prop="anesName" label="麻醉方法" width="300" />
      <el-table-column prop="anesType" label="麻醉类型" width="130" />
      <el-table-column prop="patientNo" label="住院号" width="150" />
      <el-table-column prop="name" label="患者姓名" width="120" />
      <el-table-column prop="sex" label="患者性别" width="80" />
      <el-table-column prop="age" label="患者年龄" width="150" />
      <el-table-column prop="deptStayed" label="住院科室" width="150" />
      <el-table-column prop="surgeon" label="主刀医师" width="100" />
      <el-table-column prop="helper1" label="一助" width="100" />
      <el-table-column prop="helper2" label="二助" width="100" />
      <el-table-column prop="helper3" label="三助" width="100" />
      <el-table-column prop="helper4" label="四助" width="100" />
      <el-table-column prop="anesDoctor" label="主麻" width="100" />
      <el-table-column prop="anesAssistant" label="副麻" width="100" />
      <el-table-column prop="washNurse1" label="洗手护士1" width="100" />
      <el-table-column prop="washNurse2" label="洗手护士2" width="100" />
      <el-table-column prop="itinerantNurse1" label="巡回护士2" width="100" />
      <el-table-column prop="itinerantNurse2" label="巡回护士2" width="100" />
      <el-table-column prop="inDateTime" label="入手术室时间" width="160" />
      <el-table-column
        prop="anesStartDateTime"
        label="麻醉开始时间"
        width="160"
      />
      <el-table-column prop="startDateTime" label="手术开始时间" width="160" />
      <el-table-column prop="endDateTime" label="手术结束时间" width="160" />
      <el-table-column
        prop="anesEndDateTime"
        label="麻醉结束时间"
        width="160"
      />
      <el-table-column prop="outDateTime" label="出手术室时间" width="160" />
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
      default: _ => {
        return []
      }
    }
  },
  data() {
    return {
      loading: false
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
