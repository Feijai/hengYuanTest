<template>
  <div class="easy-image" :style="{ height: height ? heightUnit : '' }">
    <img
      v-if="url"
      :src="url"
      alt=""
      :style="{
        objectFit: fit,
        width: '100%',
        height: '100%',
      }"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from "vue";
const { url, fit, height } = defineProps({
  url: { type: String, default: "" },
  fit: { type: String, default: "cover" },
  height: { type: String || Number, default: "" },
  useBrowserDownload: { type: Boolean, default: true },
  createUrl: { type: Boolean, default: false },
});

const heightUnit = computed(() => {
  if (height && height.indexOf("%") === -1 && !isNaN(parseInt(height))) {
    return `${height}px`;
  } else {
    return height;
  }
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
