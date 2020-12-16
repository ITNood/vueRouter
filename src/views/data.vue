<template>
  <div>
    <el-table :data="tableData" border>
      <el-table-column prop="id" label="ID" width="80"></el-table-column>
      <el-table-column prop="name" label="姓名"></el-table-column>
      <el-table-column prop="address" label="住址"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button @click="edit(scope.row)" size="mini">编辑</el-button>
          <el-button @click="dele(scope.row)" type="danger" size="mini"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
      style="text-align:center;margin-top:20px"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      tableData: [
        { id: 1, name: "张三", address: "广东省深圳市福田区" },
        { id: 2, name: "张三", address: "广东省深圳市福田区" },
        { id: 3, name: "张三", address: "广东省深圳市福田区" },
        { id: 4, name: "张三", address: "广东省深圳市福田区" },
        { id: 5, name: "张三", address: "广东省深圳市福田区" },
        { id: 6, name: "张三", address: "广东省深圳市福田区" },
        { id: 7, name: "张三", address: "广东省深圳市福田区" },
      ],
      currentPage4: 1,
      total:400,
    };
  },
  created() {},
  methods: {
    edit(row) {
      console.log(row);
    },
    dele(row) {
      console.log(row);
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
  },
};
</script>
<style scoped>
</style>