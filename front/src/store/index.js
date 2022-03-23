import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isAdmin: false,
    itemsList: [],
  },
  mutations: {
    getItems(state, data) {
      state.itemsList = JSON.parse(JSON.stringify(data));
    },
  },
  actions: {
    async getItems(context) {
      const { data } = await axios.get(
        'https://37b9-93-26-173-11.ngrok.io/v1/api/market/products',
      );
      context.commit('getItems', data);
    },
  },
});
