<template>
  <div>
    <el-select v-model="select" @change="selection">
      <el-option
        v-for="item in items"
        :key="item.id"
        :label="item.name"
        :value="item.id"
      ></el-option>
    </el-select>
  </div>
</template>

<script>
export default {
  name: "Selection",
  components: {},
  data() {
    return {
      items: [
        { id: 1, name: "苹果" },
        { id: 2, name: "香蕉" },
        { id: 3, name: "葡萄" },
      ],
      select:1
    };
  },
  created() {},
  methods: {
      selection(val){
        //   console.log(val)
          this.$emit('handlChange',val)
      }
  },
};
</script>
<style scoped>
</style>