<template>
  <el-dialog
    :title="title"
    :visible.sync="visible"
    :before-close="handleClose"
    width="40%"
  >
    <el-form ref="form" :model="form">
      <el-form-item label="ICD-9编码" :label-width="formLabelWidth">
        <el-input
          v-model="form.icdCode"
          placeholder="输入ICD-9编码"
          autocomplete="off"
          class="form-width"
          suffix-icon="el-icon-edit"
        />
      </el-form-item>
      <el-form-item label="手术名称" :label-width="formLabelWidth">
        <el-input
          v-model="form.name"
          placeholder="输入手术名称"
          autocomplete="off"
          class="form-width"
          suffix-icon="el-icon-edit"
        />
      </el-form-item>
      <el-form-item label="手术等级" :label-width="formLabelWidth">
        <el-select
          v-model="form.level"
          placeholder="选择手术等级"
          class="form-width"
        >
          <el-option label="一级" value="一级" />
          <el-option label="二级" value="二级" />
          <el-option label="三级" value="三级" />
          <el-option label="四级" value="四级" />
        </el-select>
      </el-form-item>
      <el-form-item label="提词器" :label-width="formLabelWidth">
        <el-input
          v-model="form.teleprompter"
          placeholder="输入提词器"
          autocomplete="off"
          class="form-width"
          suffix-icon="el-icon-edit"
        />
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="visible = false">取 消</el-button>
      <el-button type="primary" @click="handleOk"> 确 定 </el-button>
    </div>
  </el-dialog>
</template>

<style scoped>
.form-width {
  width: 70%;
}
</style>

<script>
import { addDictionary, modifyDictionary } from '@/api/surgery'

export default {
  props: {
    type: {
      type: Number,
      default: 0,
      require: true
    }
  },
  data() {
    return {
      title: '',
      visible: false,
      form: {
        icdCode: '',
        name: '',
        level: '',
        teleprompter: ''
      },
      formLabelWidth: '120px'
    }
  },
  created() {
    if (this.type === 0) {
      this.title = '添加手术'
    } else if (this.type === 1) {
      this.title = '修改手术'
    }
  },
  methods: {
    handleOk() {
      if (this.type === 0) {
        addDictionary(this.form.icdCode, this.form.name, this.form.level, this.form.teleprompter).then(() => {
          // 刷新数据表
          this.$parent.$parent.handleRefresh()
          // 关闭会话
          this.visible = false
        })
      } else if (this.type === 1) {
        modifyDictionary(this.form.icdCode, this.form.name, this.form.level, this.form.teleprompter).then(() => {
          // 刷新数据表
          this.$parent.$parent.handleRefresh()
          // 关闭会话
          this.visible = false
        })
      }
    },
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => { })
    }
  }
}
</script>
