<template>
  <el-card class="card">
    <div slot="header" class="clearfix">
      <span>科室信息</span>
    </div>

    <div class="user-profile">
      <div class="box-center">
        <pan-thumb-inhoverable
          :image="dept.avatar"
          :height="'100px'"
          :width="'100px'"
        />
      </div>
      <div class="box-center">
        <div class="user-name text-center">
          {{ dept.name }}
        </div>
        <div class="user-role text-center text-muted">
          {{ dept.code }}
        </div>
      </div>
    </div>

    <div class="user-bio">
      <div class="user-education user-bio-section">
        <div class="user-bio-section-header">
          <i class="el-icon-location-outline" /><span>地址</span>
        </div>
        <div class="user-bio-section-body">
          <div class="text-muted">
            {{ dept.location }}
          </div>
        </div>
      </div>

      <div class="user-skills user-bio-section">
        <div class="user-bio-section-header">
          <i class="el-icon-tickets" /><span>备注</span>
        </div>
        <div class="user-bio-section-body">
          <div class="text-muted">
            {{ dept.remark }}
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
    dept: {
      type: Object,
      default: () => {
        return {
          code: '',
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
