import Vue from 'vue';
import Vuex from 'vuex';
import base from './modules/base';
import language from './modules/language';
import country from "./modules/country";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    base,
    language,
    country
  },
});
