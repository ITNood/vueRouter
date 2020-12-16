<template>
  <div>
    <el-table :data="tableData" border>
      <el-table-column prop="id" label="ID"></el-table-column>
      <el-table-column prop="date" label="日期"></el-table-column>
      <el-table-column prop="username" label="姓名"></el-table-column>
      <el-table-column prop="province" label="省份"></el-table-column>
      <el-table-column prop="city" label="城市"></el-table-column>
      <el-table-column prop="address" label="区/县"></el-table-column>
      <el-table-column label="操作" fixed="right" wdith="200px">
        <template slot-scope="scope">
          <el-button type="primary" @click="edite(scope.row)">编辑</el-button>
          <el-button type="danger" @click="dele(scope.$index)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "Tablelist",
  props: ['tableData'],
  components: {},
  data() {
    return {};
  },
  created() {},
  methods: {
    edite(row) {
      this.$emit("edited", row);
    },
    dele(index) {
      this.$emit("edited", index);
    },
  },
};
</script>
<style scoped>
</style>