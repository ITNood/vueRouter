<template>
  <div>
    <el-tree
      :data="datatree"
      :props="defaultProps"
      @node-click="handleClick"
      @check-change="selectChange"
      show-checkbox
    ></el-tree>
  </div>
</template>
<script>
export default {
  data() {
    return {
      defaultProps: { children: "children", label: "label" },
      datatree: [
        {
          label: "一级",
          children: [
            {
              label: "一级-1-1",
              children: [
                {
                  label: "一级-1-2",
                },
              ],
            },
            {
              label: "一级-2-2",
              children: [{ label: "一级2-3" }],
            },
          ],
        },

        {
          label: "二级",
          children: [
            {
              label: "二级-1-1",
              children: [
                {
                  label: "二级-1-2",
                  children: [
                    {
                      label: "二级-1-3",
                    },
                  ],
                },
              ],
            },
          ],
        },
        
        {
          label: "三级",
          children: [
            {
              label: "三级-1-1",
              children: [
                {
                  label: "三级-1-2",
                  children: [
                    {
                      label: "三级-1-3",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    };
  },
  methods: {
    selectChange(data){
      console.log(data)
    },
    handleClick(data) {
      console.log(data);
    },
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
