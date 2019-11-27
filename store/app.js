export const state = () => ({
  theme: 'dark',
  isChatModelOpen: false,
  sidebarLeft: 'testitn',
  sidebarRight: ''
})
// mutations ==============================
export const mutations = {
  _setTheme(state, theme) {
    state.theme = theme
  },
  TOGGLE_CHAT_MODEL(state) {
    state.isChatModelOpen = !state.isChatModelOpen
  },
  TOGGLE_SIDEBAR_RIGHT(state, payload) {
    if (state.sidebarRight === payload) {
      state.sidebarRight = ''
    } else {
      state.sidebarRight = payload
    }
  },
  TOGGLE_SIDEBAR_LEFT(state, payload) {
    if (state.sidebarLeft === payload) {
      state.sidebarLeft = ''
    } else {
      state.sidebarLeft = payload
    }
  }
}
// actions ==============================
export const actions = {
  setTheme({ commit }, theme) {
    commit('_setTheme', theme)
  },
  toggleChatModel({ commit }) {
    commit('TOGGLE_CHAT_MODEL')
  },
  toggleSidebarRight({ commit }, payload) {
    commit('TOGGLE_SIDEBAR_RIGHT', payload)
  },
  toggleSidebarLeft({ commit }, payload) {
    commit('TOGGLE_SIDEBAR_LEFT', payload)
  }
}
// getters ==============================
export const getters = {
  theme: state => state.theme,
  isChatModelOpen: state => state.isChatModelOpen,
  sidebarLeft: state => state.sidebarLeft,
  sidebarRight: state => state.sidebarRight
}
