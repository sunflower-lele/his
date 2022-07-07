<template>
  <div>
    <el-card id="config-card" class="radio">
      <el-collapse accordion>
        <!-- 医生项 -->
        <el-collapse-item>
          <template slot="title">
            <div style="margin-left: 20px">
              <i
                class="el-icon-user-solid"
                @click.stop.prevent="doctor.dialog.visible = true"
              />
              姓名: {{ doctor.data.name }}
            </div>
          </template>
          <div style="margin-left: 20px">
            <el-row :gutter="20">
              <el-col :span="6"> 性别: {{ doctor.data.sex }} </el-col>
              <el-col :span="6">
                身份证号: {{ doctor.data.identityNo }}
              </el-col>
              <el-col :span="6"> 电话号码: {{ doctor.data.telephone }} </el-col>
            </el-row>
          </div>
        </el-collapse-item>

        <!-- 科室项 -->
        <el-collapse-item>
          <template slot="title">
            <div style="margin-left: 20px">
              <i
                class="el-icon-s-cooperation"
                @click.stop.prevent="stopCollapse"
              />
              科室: {{ dept.name }}
            </div>
          </template>
          <div style="margin-left: 20px">
            <el-row :gutter="20">
              <el-col :span="6"> 编码: {{ dept.code }} </el-col>
            </el-row>
          </div>
        </el-collapse-item>
      </el-collapse>
    </el-card>

    <!-- 会话 -->
    <el-dialog title="选择医生" :visible.sync="doctor.dialog.visible">
      <el-table
        ref="singleTable"
        :data="
          doctor.dialog.data.filter(
            (data) =>
              !doctor.dialog.filter || data.code.includes(doctor.dialog.filter)
          )
        "
        highlight-current-row
        style="width: 100%"
        @current-change="handleCurrentChange"
      >
        <el-table-column type="index" width="50" />
        <el-table-column property="code" label="工号" width="120" />
        <el-table-column property="name" label="姓名" width="120" />
        <el-table-column property="sex" label="性别" width="120" />
        <el-table-column property="deptName">
          <template slot="header" slot-scope="{}">
            <el-row type="flex" class="text-center">
              <el-col :span="6">
                <div style="text-align: left; margin-top: 2px">科室</div>
              </el-col>
              <el-col :span="12" :offset="6">
                <el-input
                  v-model="doctor.dialog.filter"
                  size="mini"
                  placeholder="输入关键字搜索"
                />
              </el-col>
            </el-row>
          </template>
        </el-table-column>
      </el-table>
    </el-dialog>
  </div>
</template>

<style lang="postcss" scoped>
.radio {
  border-radius: 20px;
}

#config-card {
  margin: 20px;
  border: 2px;
}
</style>

<script>
export default {
  data() {
    return {
      doctor: {
        data: {
          code: null,
          name: null,
          sex: null,
          identityNo: null,
          telephone: null,
          deptCode: null,
          deptName: null
        },
        dialog: {
          visible: false,
          filter: '',
          data: [{
            code: '000306',
            name: '覃鹏展',
            sex: '男',
            deptName: '信息中心'
          }, {
            code: '008888',
            name: '刘晓东',
            sex: '男',
            deptName: '信息中心'
          }]
        }
      },
      dept: {
        name: '信息中心',
        code: '1000',
        dialog: {
          visible: false,
          data: {}
        }
      }
    }
  },
  methods: {
    handleCurrentChange(data) {
      this.doctor.data.code = data.code
      this.doctor.data.name = data.name
      this.doctor.data.sex = data.sex
      this.doctor.data.deptName = data.deptName
    },
    stopCollapse() {
    }
  }
}
</script>
