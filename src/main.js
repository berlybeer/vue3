import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// import Vue from "vue";



// Vue.component("alert", require('./components/Alert.vue').default);

createApp(App)
	.component("alert", require('./components/Alert.vue').default)
  	.use(router)
  	.mount("#app");
