<template>
  <swiper
    :direction="'vertical'"
    :speed="300"
    class="mySwiper"
    @swiper="setSwiperRef"
    @slideChangeTransitionEnd="onSwiperChange"
  >
    <swiper-slide v-for="(item, i) in renderData" :key="i" :virtualIndex="i">
      {{ item }}{{ selectSwiperIndex }}
      <vlog-detail :item="item" :is-active="selectSwiperIndex === i" />
    </swiper-slide>
  </swiper>
</template>

<script setup lang="ts">
import vlogDetail from "./vlogDetail.vue";
import { onMounted, ref } from "vue";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/vue";
import type { Swiper as SwiperProps } from "swiper";
import "swiper/css";

interface RenderDataProps {
  cover: string;
  play_url: string;
  title: string;
}
const { filter } = defineProps({
  filter: { type: String },
});
const renderData = ref<RenderDataProps[]>([]);
const swiperRef = ref();
const selectSwiperIndex = ref(0);
const setSwiperRef = (swiper: SwiperProps) => {
  swiperRef.value = swiper;
};
const onSwiperChange = () => {
  selectSwiperIndex.value = swiperRef.value.activeIndex;
};

onMounted(() => {
  axios.get(`http://localhost:3000/${filter}`).then((res) => {
    renderData.value = [...res.data.items];
  });
});
</script>

<style scoped lang="scss">
.swiper {
  height: 100vh;
}
.swiper-slide {
  /* height: 100%;
  line-height: 100vh;
  font-size: 30px;
  text-align: center;
  background-color: skyblue; */
}
</style>
