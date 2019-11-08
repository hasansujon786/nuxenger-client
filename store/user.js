export const state = () => ({
  authUser: {}
})
// mutations ==============================
export const mutations = {
  SET_AUTH_USER(state, user) {
    state.authUser = user
  }
}
// actions ==============================
export const actions = {
  setAuthUser({ commit }, user) {
    commit('SET_AUTH_USER', user)
  }
}
// getters ==============================
export const getters = {
  getauthUser: state => state.authUser
}
