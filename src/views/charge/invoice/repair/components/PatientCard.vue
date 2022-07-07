<template>
  <el-card class="card">
    <div slot="header" class="clearfix">
      <span>患者信息</span>
    </div>

    <div class="user-profile">
      <div class="box-center">
        <pan-thumb-inhoverable
          :image="patient.avatar"
          :height="'100px'"
          :width="'100px'"
        />
      </div>
      <div class="box-center">
        <div class="user-name text-center">
          {{ patient.name }}
        </div>
        <div class="user-role text-center text-muted">
          {{ patient.patientNo }}
        </div>
      </div>
    </div>

    <el-descriptions title="用户信息">
      <el-descriptions-item label="用户名">kooriookami</el-descriptions-item>
      <el-descriptions-item label="手机号">18100000000</el-descriptions-item>
      <el-descriptions-item label="居住地">苏州市</el-descriptions-item>
      <el-descriptions-item label="备注">
        <el-tag size="small">学校</el-tag>
      </el-descriptions-item>
      <el-descriptions-item label="联系地址">
        江苏省苏州市吴中区吴中大道 1188 号
      </el-descriptions-item>
    </el-descriptions>

    <div class="user-bio">
      <div class="user-education user-bio-section">
        <div class="user-bio-section-header">
          <i class="el-icon-location-outline" /><span>基本信息</span>
        </div>
        <div class="user-bio-section-body">
          <div class="text-muted"><span>基本信息</span> test</div>
        </div>
      </div>

      <div class="user-skills user-bio-section">
        <div class="user-bio-section-header">
          <i class="el-icon-tickets" /><span>备注</span>
        </div>
        <div class="user-bio-section-body">
          <div class="text-muted">
            {{ patient.remark }}
          </div>
        </div>
      </div>
    </div>
  </el-card>
</template>

<script>
import PanThumbInhoverable from '@/components/PanThumbInhoverable/index.vue'

export default {
  components: {
    PanThumbInhoverable
  },
  props: {
    patient: {
      type: Object,
      default: () => {
        return {
          patientNo: '',
          name: '',
          avatar: '',
          location: '',
          remark: ''
        }
      }
    }
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.box-center {
  margin: 0 auto;
  display: table;
}

.card {
  border-radius: 10px;
  margin-bottom: 20px;

  .user-profile {
    .user-name {
      font-weight: bold;
    }

    .box-center {
      padding-top: 10px;
    }
  }

  .user-bio {
    margin-top: 20px;
    color: #606266;

    span {
      padding-left: 4px;
    }

    .user-bio-section {
      font-size: 14px;
      padding: 15px 0;

      .user-bio-section-header {
        border-bottom: 1px solid #dfe6ec;
        padding-bottom: 10px;
        margin-bottom: 10px;
        font-weight: bold;
      }
    }
  }
}
</style>
