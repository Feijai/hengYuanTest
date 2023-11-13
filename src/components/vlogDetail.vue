<template>
  <div class="video-detail" :class="{ useSafeArea: isiPhoneX && false }">
    <easy-image
      class="cover"
      :url="item.cover"
      disabled-error
    />
    <video-vertical
      class="player"
      v-show="isActive && item.play_url"
      :isActive="isActive && isActiveName === item.group"
      :url="item.play_url"
    />
    <div
      class="video-info"
      :class="{ useSafeArea: isiPhoneX && false }"
      :style="{ bottom: '3rem' }"
    >
      <div class="info-actions">
        <div class="info">
          <div class="title">{{ item.title }}</div>
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

const { item, isActive, isActiveName } = defineProps({
  item: {
    type: Object,
    default: () => {},
  },
  isActive: { type: Boolean, default: true },
  isActiveName: { type: String, default: "following_list" },
});
const { isiPhoneX } = storeToRefs(useDeviceStore());
</script>

<style lang="scss" scoped>
.video-detail {
  position: relative;
  height: calc(100% - 50px);
}

.player {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
.video-info {
  position: absolute;
  left: 0;
  bottom: 20%;
  width: 100%;
  pointer-events: none;
}
.title {
  color: white;
}
</style>
