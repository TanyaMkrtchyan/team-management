export const state = () => ({
  user: null
})

export const getters = {
  getUser(state) {
    return state.user
  }
}

export const mutations = {
  setUser(state, data) {
    state.user = data
  },
  resetUser(state) {
    state.user = null
  }
}

export const actions = {
  async signUp(_, user) {
    const { data, error } = await this.$supabase.auth.signUp(user)
    return { data, error }
  },
  async signIn({ commit }, data) {
    const { user, session, error } = await this.$supabase.auth.signInWithPassword(data)
    commit('setUser', data)
    return { user, session, error }
  },
  async signOut({ commit }) {
    const { error } = await this.$supabase.auth.signOut()
    commit('resetUser')
    return { error }
  }
}