import Vue from 'vue';
import Vuex from 'vuex';
import employee from './modules/employee';
import employer from './modules/employer';
import language from './modules/language';
import country from "./modules/country";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    employee,
    language,
    country,
    employer
  },
});
