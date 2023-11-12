<template>
  <div class="page">
    <van-tabs
      class="menus"
      v-model:active="active"
      sticky
      :offset-top="'3rem'"
      line-width="0"
      @change="onChange"
    >
      <van-tab title="Following" name="following_list">
        <vlog-list class="vlog" :filter="active" />
      </van-tab>
      <van-tab title="For You" name="for_you_list">
        <vlog-list class="vlog" :filter="active" />
      </van-tab>
    </van-tabs>
    <tabbar />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import vlogList from "../../components/vlogList.vue";
import tabbar from "../../components/tabbar.vue";

const active = ref("following_list");
const onChange = (targetName: string) => {
  active.value = targetName;
};
</script>

<style scoped lang="scss">
:deep(.van-tabs__wrap) {
  width: 50%;
  margin: 0 auto;
}
:deep(.van-tabs__nav) {
  background-color: transparent;
  .van-tab {
    color: white;
  }
}
:deep(.van-tabs__content) {
  margin-top: -44px;
}
</style>
