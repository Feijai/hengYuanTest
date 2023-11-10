<template>
  <div class="short-video-detail" :class="{ useSafeArea: isiPhoneX && false }">
    <easy-image
      class="cover"
      fit="cover"
      height="100%"
      :url="item.cover"
      disabled-error
    />
    <video-vertical
      class="player"
      v-if="isActive && item.play_url"
      :url="item.play_url"
    />
    <div
      class="video-info"
      :class="{ useSafeArea: isiPhoneX && false }"
      :style="{ bottom: '3rem' }"
    >
      <div class="info-actions">
        <div class="info">
          <div class="title">{{ item.name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import useDeviceStore from "../store/useDeviceStore";
import easyImage from "./easyImage.vue";
import videoVertical from "./videoVertical.vue";

const { item, isActive } = defineProps({
  item: {
    type: Object,
    default: () => {},
  },
  isActive: { type: Boolean, default: true },
});

const { isiPhoneX } = storeToRefs(useDeviceStore());
</script>

<style lang="scss" scoped></style>
