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
    this.$cookies.set('user', data, {
      path: '/',
      maxAge: 60 * 60 * 24 * 7,
      secure: true
    })
    commit('setUser', data)
    return { user, session, error }
  },
  async signOut({ commit }) {
    const { error } = await this.$supabase.auth.signOut()
    this.$cookies.remove('user')
    commit('resetUser')
    return { error }
  }
}