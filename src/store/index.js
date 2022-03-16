import Vue from 'vue';
import Vuex from 'vuex';
import LoginSignup from './modules/LoginSignup';
import Room from './modules/Room';

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    LoginSignup: LoginSignup,
    Room: Room,
  },
  state: {},
  mutations: {},
  actions: {},
  getters: {},
});
