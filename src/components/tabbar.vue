<template>
  <div>
    <van-tabbar
      route
      placeholder
      class="app-tabbar"
      :border="false"
      :class="{}"
    >
      <van-tabbar-item v-for="(e, i) in list" :key="i" replace :to="e.path">
        <span :class="{}">{{ e.title }}</span>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script setup lang="ts">
const list = [
  { title: "Home", path: "/" },
  { title: "Discover", path: "/Discover" },
];
</script>
<style lang="scss" scoped>
:deep(.van-tabbar-item) {
  background-color: black;
}
:deep(.van-tabbar-item__text) {
  color: white;
}
</style>
