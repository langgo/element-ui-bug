<template>
  <div class="hello">
    <el-button type="text" @click="dialogFormVisible = true">打开嵌套表单的 Dialog</el-button>

    <el-dialog class="xxxx" custom-class="my-dialog" title="收货地址" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="活动名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" auto-complete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      dialogFormVisible: false,
      form: {
        name: ''
      },
      formLabelWidth: '120px'
    };
  }
}
</script>

<style scoped>
.hello >>> .my-dialog {
  background: red;
  width: 300px;
}

.xxxx {
  background: red;
}
</style>
