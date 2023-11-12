<template>
  <KeepAlive>
    <component :is="current"></component>
  </KeepAlive>
</template>

<script setup lang="ts">
import home from "./pages/home/index.vue";
import { shallowRef } from "vue";
const current = shallowRef(home);
</script>

<style lang="scss" scoped></style>
