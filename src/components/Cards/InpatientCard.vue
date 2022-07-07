<template>
  <el-card style="border-radius: 10px">
    <div slot="header" class="clearfix">
      <span>住院患者</span>
      <el-button
        icon="el-icon-refresh"
        size="mini"
        style="margin-left: 10px"
        circle
        @click="change"
      />
    </div>

    <div class="inpatient-profile">
      <div class="box-center">
        <el-avatar
          :size="80"
          src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
        />
      </div>
      <div class="box-center">
        <div class="inpatient-name text-center">
          {{ patient.name }}
        </div>
        <div class="inpatient-code text-center text-muted">
          {{ patient.patientNo }}
        </div>
      </div>
    </div>

    <div class="inpatient-bio">
      <div class="inpatient-bio-section">
        <div class="inpatient-bio-section-header">
          <i class="el-icon-location-outline" /><span>基本信息</span>
        </div>
        <div class="text-muted">
          <el-row :gutter="20">
            <el-col :span="12" :xs="24">
              <div class="text-muted">
                <span>卡号: </span>
                {{ patient.cardNo }}
              </div>
            </el-col>
            <el-col :span="12" :xs="24">
              <div class="text-muted">
                <span>性别: </span>
                {{ patient.sex }}
              </div>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="24" :xs="24">
              <div class="text-muted">
                <span>联系电话: </span>
                {{ patient.telephone }}
              </div>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="24" :xs="24">
              <div class="text-muted">
                <span>身份证号: </span>
                {{ patient.identityNo }}
              </div>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="24" :xs="24">
              <div class="text-muted">
                <span>年龄: </span>
                {{ patient.age }}
              </div>
            </el-col>
          </el-row>
        </div>
      </div>

      <div class="inpatient-bio-section">
        <div class="inpatient-bio-section-header">
          <i class="el-icon-tickets" /><span>住院信息</span>
        </div>
        <div class="text-muted">
          <el-row :gutter="20">
            <el-col :span="12" :xs="24">
              <div class="text-muted">
                <span>住院科室: </span>
                {{ patient.department }}
              </div>
            </el-col>
            <el-col :span="12" :xs="24">
              <div class="text-muted">
                <span>主管医师: </span>
                {{ patient.doctor }}
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
  </el-card>
</template>

<script>
export default {
  props: {
    patient: {
      type: Object,
      default: () => {
        return {
          patientNo: '',
          cardNo: '',
          name: '',
          sex: '',
          telephone: '',
          identityNo: '',
          age: '',
          department: '',
          doctor: ''
        }
      }
    },
    change: {
      type: Function,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>
.box-center {
  margin: 0 auto;
  display: table;
}

.text-muted {
  color: #777;
}

.inpatient-profile {
  .inpatient-name {
    font-weight: bold;
  }

  .inpatient-code {
    padding-top: 10px;
    font-weight: 400;
    font-size: 14px;
  }

  .box-center {
    padding-top: 10px;
  }
}

.inpatient-bio {
  margin-top: 20px;
  color: #606266;

  span {
    padding-left: 4px;
  }

  .el-row {
    margin-top: 20px;
  }

  .inpatient-bio-section {
    font-size: 14px;
    padding: 15px 0;

    .inpatient-bio-section-header {
      border-bottom: 1px solid #dfe6ec;
      padding-bottom: 10px;
      margin-bottom: 10px;
      font-weight: bold;
    }
  }
}
</style>
