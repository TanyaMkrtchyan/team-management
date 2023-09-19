export const state = () => ({
  counter: 0,
  isOpenModal: false,
  modalTitle: ''
})

export const getters = {
  getCounter(state) {
    return state.counter
  },
  getModalState(state) {
    return state.isOpenModal
  }
}

export const mutations = {
  increment(state) {
    state.counter++
  },
  setCounter(state, val) {
    state.counter = val
  },
  setIsOpenModal(state, value) {
    state.isOpenModal = value
  },
  setModalTitle(state, title) {
    state.modalTitle = title
  },
}

export const actions = {
  incrementCounter({ commit }) {
    commit('increment')
  },
  setCounter({ commit }, data) {
    commit('setCounter', data)
  }
}