<template>
  <div>
    <div class="infinite-list-wrapper" style="overflow: auto">
      <ul
        class="list"
        v-infinite-scroll="load"
        infinite-scroll-disabled="disabled"
      >
        <li v-for="i in count" class="list-item" :key="i">{{ i }}</li>
      </ul>
      <p v-if="loading"> <i :class="loading==true?'el-icon-loading':''"></i>加载中...</p>
      <p v-if="noMore">没有更多了</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Scroll",
  components: {},
  data() {
    return {
      count: 10,
      loading: false,
    };
  },
  computed: {
    noMore() {
      return this.count >= 20;
    },
    disabled() {
      return this.loading || this.noMore;
    },
  },
  created() {},
  methods: {
     load () {
        this.loading = true
        setTimeout(() => {
          this.count += 2
          this.loading = false
        },1000)
      }
  },
};
</script>
<style scoped>
</style>