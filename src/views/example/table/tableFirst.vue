<template>
  <div>
    <Tablelist  @edited="handleClick" :tableData="datalist" />
    <Page :value="number" @activePge="activeCur" ref="child"/>
  </div>
</template>
<script>
import Page from "../../../components/pagenation";
import Tablelist from '../../../components/table'
export default {
  components: { Page,Tablelist },
  data() {
    return {
      number:100,
      datalist: [
        {
          id: 1,
          date: "2020.11.10",
          username: "张三",
          province: "广东",
          city: "深圳",
          address: "福田区",
        },
        {
          id: 2,
          date: "2020.11.10",
          username: "张三",
          province: "广东",
          city: "深圳",
          address: "福田区",
        },
        {
          id: 3,
          date: "2020.11.10",
          username: "张三",
          province: "广东",
          city: "深圳",
          address: "福田区",
        },
        {
          id: 4,
          date: "2020.11.10",
          username: "张三",
          province: "广东",
          city: "深圳",
          address: "福田区",
        },
        {
          id: 5,
          date: "2020.11.10",
          username: "张三",
          province: "广东",
          city: "深圳",
          address: "福田区",
        },
        {
          id:6,
          date:'2020.12.17',
          username:'李四',
          province:'广东',
          city:'广州',
          address:'天河区'
        }
      ],
    };
  },
  created(){
  },
  methods: {
    edite(row) {
      console.log(row.id);
    },
    dele(row) {
      console.log(row.id);
    },
    activeCur(val){
      console.log(val)
    },
    handleClick(row,index){
      console.log(row,index)
    }
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
