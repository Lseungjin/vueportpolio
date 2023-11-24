import { createStore } from 'vuex'

export default createStore({
  state: {
    isPcAndTablet: true,
    theme: 'light'
  },
  mutations: {
    SET_THEME(state, payload) {
      state.theme = payload;
    },
  },
})