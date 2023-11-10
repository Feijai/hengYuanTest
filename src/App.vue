<template>
  <div class="page">
    <van-tabs v-model:active="active">
      <van-tab title="Following" name="following_list">
        <vlog-list :filter="active" />
      </van-tab>
      <van-tab title="For You" name="for_you_list">
        <vlog-list :filter="active" />
      </van-tab>
    </van-tabs>
    <tabbar />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import vlogList from "./components/vlogList.vue";
import tabbar from "./components/tabbar.vue";
const active = ref("following_list");
</script>

<style scoped lang="scss">
.page {
}
</style>
