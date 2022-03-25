import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isAdmin: false,
    itemsList: [],
    usersList: [],
  },
  mutations: {
    // _________________________________________________________________________________________
    // Products
    getItems(state, data) {
      console.log('data: ', data);
      state.itemsList = data;
    },
    postItem(state, status, data) {
      if (status !== 201) {
        console.log("error: bad API response (can't create product(s))");
        return;
      }
      state.itemsList = [...state.itemsList, data];
    },
    putItem(state, status, data) {
      if (status !== 204) {
        console.log("error: bad API response (can't update product)");
        return;
      }
      state.itemsList = [...state.itemsList, data];
    },
    deleteItem(state, status, id) {
      if (status !== 200) {
        console.log("error: bad API response (can't remove product from store)");
        return;
      }
      for (let i = 0; i < state.itemsList.length; i + 1) {
        // eslint-disable-next-line
        if (state.itemsList[i]._id === id) {
          state.itemsList.splice(i, 1);
          return;
        }
      }
      console.log("error: can't find product in store (unable to remove)");
    },
    // _________________________________________________________________________________________
    // Users
    getUsers(state, data) {
      console.log('data: ', data);
      state.usersList = data;
    },
    postUsers(state, status, data) {
      if (status !== 201) {
        console.log("error: bad API response (can't create user(s))");
        return;
      }
      state.usersList = [...state.usersList, data];
    },
    putUser(state, status, data) {
      if (status !== 204) {
        console.log("error: bad API response (can't update user)");
        return;
      }
      state.usersList = [...state.usersList, data];
    },
    deleteUser(state, status, id) {
      if (status !== 200) {
        console.log("error: bad API response (can't remove user)");
        return;
      }
      for (let i = 0; i < state.usersList.length; i + 1) {
        // eslint-disable-next-line
        if (state.usersList[i]._id === id) {
          state.usersList.splice(i, 1);
          return;
        }
      }
      console.log("error: can't find user in store (unable to remove from store)");
    },
  },
  actions: {
    // _________________________________________________________________________________________
    // Products
    getItems(context) {
      axios.get('https://d8a9-93-26-173-11.ngrok.io/v1/api/market/products').then((res) => {
        context.commit('getItems', res.data);
      });
    },
    postItems(context, data) {
      axios.post('https://d8a9-93-26-173-11.ngrok.io/v1/api/market/products', data).then((res) => {
        context.commit('postItems', res.status, data);
      });
    },
    putItem(context, id, data) {
      axios.put(`https://d8a9-93-26-173-11.ngrok.io/v1/api/market/product/${id}`, data).then((res) => {
        context.commit('putItem', res.status, data);
      });
    },
    deleteItem(context, id) {
      axios.delete(`https://d8a9-93-26-173-11.ngrok.io/v1/api/market/product/${id}`).then((res) => {
        context.commit('deleteItem', res.status, id);
      });
    },
    // _________________________________________________________________________________________
    // Users
    getUsers(context) {
      axios.get('https://d8a9-93-26-173-11.ngrok.io/v1/api/market/users').then((res) => {
        context.commit('getUsers', res.data);
      });
    },
    postUsers(context, data) {
      axios.post('https://d8a9-93-26-173-11.ngrok.io/v1/api/market/users', data).then((res) => {
        context.commit('postUsers', res.status, data);
      });
    },
    putUser(context, id, data) {
      axios.put(`https://d8a9-93-26-173-11.ngrok.io/v1/api/market/user/${id}`, data).then((res) => {
        context.commit('putUser', res.status, data);
      });
    },
    deleteUser(context, id) {
      axios.delete(`https://d8a9-93-26-173-11.ngrok.io/v1/api/market/user/${id}`).then((res) => {
        context.commit('deleteUser', res.status, id);
      });
    },
  },
});
