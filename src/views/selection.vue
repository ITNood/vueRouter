<template>
  <div>
      <Selection @handlChange="change"/>
  </div>
</template>

<script>
import Selection from '../components/selection'
export default {
  components: {Selection},
  data() {
    return {
       
    };
  },
  created() {},
  methods: {
      change(val){
          console.log('这是传过来的值：'+val)
      }
  },
};
</script>
<style scoped>
</style>