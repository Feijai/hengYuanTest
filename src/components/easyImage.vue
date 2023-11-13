<template>
  <div class="easy-image" :style="{ height: '100% ' }">
    <img
      v-if="url"
      :src="url"
      alt=""
      :style="{
        objectFit: 'cover',
        width: '100%',
        height: '100%',
      }"
    />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
const { url } = defineProps({
  url: { type: String, default: "" },
});

onMounted(() => {});
</script>

<style lang="scss" scoped>
.easy-image {
  position: relative;
  overflow: hidden;
  img {
    display: block;
  }
}

.error,
.loading-wrap {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  font-size: 13px;
  justify-content: center;
  align-items: center;
  object-fit: cover;
  img {
    opacity: 0.3;
  }
}

.easy-image-loading {
  max-height: 100%;
  width: 100%;
  height: auto;
  object-fit: contain;
}
</style>
