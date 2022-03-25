import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isAdmin: false,
    itemsList: [],
    itemsFilteredList: [],
  },
  mutations: {
    getItems(state, data) {
      console.log('data: ', data);
      state.itemsList = data;
    },
  },
  actions: {
    getItems(context) {
      axios.get('https://d7d6-93-26-173-11.ngrok.io/v1/api/market/products').then((res) => {
        context.commit('getItems', res.data);
      });
    },
  },
});
