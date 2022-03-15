import Vue from 'vue';
import Vuex from 'vuex';
import LoginSignup from './modules/LoginSignup';

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    LoginSignup: LoginSignup,
  },
  state: {},
  mutations: {},
  actions: {},
  getters: {},
});
