import Vue from 'vue';
import Vuex from 'vuex';
import phones from '../assets/phones.json';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    phones,
    selectedPhone: {},
    status: 'fetching',
  },
  mutations: {
    SET_STATUS(state, status) {
      state.status = status;
    },
    SET_SELECTED_PHONE(state, obj) {
      state.selectedPhone = obj;
    },
  },
  actions: {
  },
  modules: {
  },
});
