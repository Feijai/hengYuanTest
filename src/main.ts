import { createApp } from "vue";
import { Tab, Tabs, Tabbar, TabbarItem } from "vant";
import "./style.css";
import App from "./App.vue";
import { createPinia } from "pinia";

const pinia = createPinia();

createApp(App)
  .use(Tab)
  .use(Tabs)
  .use(Tabbar)
  .use(TabbarItem)
  .use(pinia)
  .mount("#app");
