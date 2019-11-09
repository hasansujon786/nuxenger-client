export const state = () => ({
  theme: 'dark',
  isChatModelOpen: false
})
// mutations ==============================
export const mutations = {
  _setTheme(state, theme) {
    state.theme = theme
  },
  TOGGLE_CHAT_MODEL(state) {
    console.info('from toggle')
    state.isChatModelOpen = !state.isChatModelOpen
  }
}
// actions ==============================
export const actions = {
  setTheme({ commit }, theme) {
    commit('_setTheme', theme)
  },
  toggleChatModel({ commit }) {
    commit('TOGGLE_CHAT_MODEL')
  }
}
// getters ==============================
export const getters = {
  theme: state => state.theme,
  isChatModelOpen: state => state.isChatModelOpen
}
