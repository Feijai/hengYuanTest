<template>
  <div class="video-player-container">
    <video
      id="videoPlayer"
      crossorigin="anonymous"
      ref="videoRef"
      class="video-js vjs-big-play-centered"
      preload="metadata"
      playsinline
    ></video>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref, onUpdated, watch, nextTick } from "vue";
import videojs from "video.js";
import "video.js/dist/video-js.css";
const show = ref<boolean>(false);
const props = defineProps({
  url: { type: String, default: "" },
  isActive: { type: Boolean, default: false },
});

const videoPlayer = ref();
const videoRef = ref<null | HTMLVideoElement>(null);
const defaultOptions = { aspectRatio: "16:9" };

const videoOptions = ref({
  controlBar: {
    volumePanel: false,
    pictureInPictureToggle: false,
    fullscreenToggle: false,
  },
  autoplay: true,
  muted: true,
  liveui: true,
  fluid: false,
  controls: true,
  autobuffer: true,
  loop: true,
  userActions: {
    doubleClick: false,
  },
  sources: [
    {
      type: "application/x-mpegURL",
      src: props.url,
    },
  ],
});

const initVideoPlayer = () => {
  videoPlayer.value = videojs(videoRef.value, {
    ...videoOptions.value,
    ...defaultOptions,
  });
};
onMounted(() => {
  if (!videoRef.value) return;
  if (props.isActive) initVideoPlayer();
});

watch(
  () => props.isActive,
  (nowActive: boolean) => {
    if (nowActive) {
      if (!videoPlayer.value) {
        initVideoPlayer();
      } else {
        videoPlayer.value.play();
      }
    } else {
      videoPlayer.value.pause();
    }
  }
);
onUnmounted(() => {
  if (videoPlayer.value) {
    videoPlayer.value.dispose();
  }
});
</script>

<style lang="scss" scoped>
:deep(.video-js) {
  height: calc(100%) !important;
}
</style>
