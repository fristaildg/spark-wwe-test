import Vue from 'vue';
import App from './App/App.vue';

new Vue({
  el: '#app',
  render: createElement => createElement(App)
});

// new Vue(App).$mount('#app');