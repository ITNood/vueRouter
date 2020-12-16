<template>
  <div>
    <el-pagination background layout="prev, pager, next" :total="value" class="page" @current-change="currentPage">
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: "Page",
  components: {},
  props: ["value"],
  data() {
    return {};
  },
  created() {},
  methods: {
      currentPage(val){
          this.$emit('activePge',val)
      }
  },
};
</script>
<style scoped>
.page{
    text-align: center;
    margin-top: 20px;
}
</style>