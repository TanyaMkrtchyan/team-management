export const state = () => ({
  counter: 0
})

export const getters = {
  getCounter(state) {
    return state.counter
  }
}

export const mutations = {
  increment(state) {
    state.counter++
  },
  setCounter(state, val) {
    state.counter = val
  }
}

export const actions = {
  incrementCounter({ commit }) {
    commit('increment')
  },
  setCounter({ commit }, data) {
    commit('setCounter', data)
  }
}