const getDefaultState = () => {
  return {
    authUser: {}
  }
}
export const state = () => getDefaultState()

// mutations ==============================
export const mutations = {
  RESET_STATE(state) {
    // https://tahazsh.com/vuebyte-reset-module-state
    Object.assign(state, getDefaultState())
  },
  SET_AUTH_USER(state, user) {
    state.authUser = user
  }
}
// actions ==============================
export const actions = {
  resetUserState({ commit }) {
    commit('RESET_STATE')
  },
  setAuthUser({ commit }, user) {
    commit('SET_AUTH_USER', user)
  }
}
// getters ==============================
export const getters = {
  getauthUser: state => state.authUser
}
