<template>
  <el-card style="border-radius: 10px">
    <div slot="header" class="clearfix">
      <span>门诊患者</span>
      <el-button
        icon="el-icon-refresh"
        size="mini"
        type="info"
        style="margin-left: 10px"
        circle
        @click="click"
      />
    </div>

    <div class="outpatient-profile">
      <div class="box-center">
        <el-avatar :size="80">{{ data.name }}</el-avatar>
      </div>
      <div class="box-center">
        <div class="outpatient-name text-center">
          {{ data.name }}
        </div>
      </div>
    </div>
    <div class="outpatient-bio">
      <div class="outpatient-bio-section">
        <div class="outpatient-bio-section-header">
          <i class="el-icon-location-outline" /><span>基本信息</span>
        </div>
        <div class="text-muted">
          <el-row :gutter="20">
            <el-col :span="12" :xs="24">
              <div class="text-muted">
                <span>卡号: </span>
                {{ data.cardNo }}
              </div>
            </el-col>
            <el-col :span="12" :xs="24">
              <div class="text-muted">
                <span>性别: </span>
                {{ data.sex }}
              </div>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="24" :xs="24">
              <div class="text-muted">
                <span>联系电话: </span>
                {{ data.telephone }}
              </div>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="24" :xs="24">
              <div class="text-muted">
                <span>身份证号: </span>
                {{ data.identityNo }}
              </div>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="24" :xs="24">
              <div class="text-muted">
                <span>年龄: </span>
                {{ data.age }}
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
    data: {
      type: Object,
      default: () => {
        return {
          cardNo: '',
          name: '',
          sex: '',
          telephone: '',
          identityNo: '',
          age: ''
        }
      }
    }
  },
  methods: {
    click() {
      this.$emit('click')
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

.outpatient-profile {
  .outpatient-name {
    font-weight: bold;
  }

  .outpatient-code {
    padding-top: 10px;
    font-weight: 400;
    font-size: 14px;
  }

  .box-center {
    padding-top: 10px;
  }
}

.outpatient-bio {
  margin-top: 20px;
  color: #606266;

  span {
    padding-left: 4px;
  }

  .el-row {
    margin-top: 20px;
  }

  .outpatient-bio-section {
    font-size: 14px;
    padding: 15px 0;

    .outpatient-bio-section-header {
      border-bottom: 1px solid #dfe6ec;
      padding-bottom: 10px;
      margin-bottom: 10px;
      font-weight: bold;
    }
  }
}
</style>
