export const state = () => ({
  theme: 'dark',
  isDMmodelOpen: false
})
// mutations ==============================
export const mutations = {
  _setTheme(state, theme) {
    state.theme = theme
  },
  TOGGLE_DM_MODEL(state) {
    state.isDMmodelOpen = !state.isDMmodelOpen
  }
}
// actions ==============================
export const actions = {
  setTheme({ commit }, theme) {
    commit('_setTheme', theme)
  },
  toggleDMmodel({ commit }) {
    commit('TOGGLE_DM_MODEL')
  }
}
// getters ==============================
export const getters = {
  getTheme: state => state.theme,
  getIsDMmodelOpen: state => state.isDMmodelOpen
}
