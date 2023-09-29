export const actions = {
  async nuxtServerInit(_, context) {
    const user = context.app.$cookies.get('user')
    if (user) {
      context.store.commit('user/setUser', user, { root: true })
    }
  }
}