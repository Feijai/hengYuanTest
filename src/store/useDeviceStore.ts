import { defineStore } from "pinia";
import { ref } from "vue";

const useDeviceStore = defineStore("demo", () => {
  const isiPhoneX = ref(false);

  return {
    isiPhoneX,
  };
});

export default useDeviceStore;
