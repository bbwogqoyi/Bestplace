import { createStore } from 'vuex'

// Create a new store instance.
export default createStore({
  state () {
    return {
      isAuthenticated: false
    }
  },
  mutations: {
    setIsAuthenticated (state, value) {
      state.isAuthenticated = value
    }
  }
});