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
import { onMounted, onUnmounted, ref } from "vue";
import videojs from "video.js";
import "video.js/dist/video-js.css";
const { url } = defineProps({
  url: { type: String, default: "" },
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
      src: url,
    },
  ],
});

onMounted(() => {
  if (!videoRef.value) return;
  videoPlayer.value = videojs(videoRef.value, {
    ...videoOptions,
    ...defaultOptions,
  });
  videoPlayer.value.on("error", () => {
    // if error
  });

  videoPlayer.value.one("waiting", () => {});
  videoPlayer.value.on("play", () => {
    // emit("play");
  });

  videoPlayer.value.on("ended", () => {
    // emit("ended");
  });
});

onUnmounted(() => {
  if (videoPlayer.value) {
    videoPlayer.value.dispose();
  }
});
</script>

<style lang="sass" scoped></style>
