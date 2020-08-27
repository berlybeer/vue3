import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// import Vue from "vue";



// Vue.component("alert", require('./components/Alert.vue').default);

createApp(App)
	.component("alert", require('./components/Alert.vue').default)
	.component('button-counter', {
	data: function(){
		return{
			count: 0
		}
	},
	template: '<button v-on:click="count++">You clicked me {{count}} times.</button>'
})
  	.use(router)
  	.mount("#app");
