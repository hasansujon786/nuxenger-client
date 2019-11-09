const getDefaultState = () => {
  return {
    chatList: []
  }
}
export const state = () => getDefaultState()

// mutations ==============================
export const mutations = {
  RESET_STATE(state) {
    // https://tahazsh.com/vuebyte-reset-module-state
    Object.assign(state, getDefaultState())
  },
  SET_CHAT_LIST(state, chats) {
    state.chatList = chats
  },
  PUSH_NEW_CHAT(state, chat) {
    state.chatList.unshift(chat)
  }
}
// actions ==============================
export const actions = {
  resetChatsState({ commit }) {
    commit('RESET_STATE')
  },
  setChatList({ commit }, chats) {
    commit('SET_CHAT_LIST', chats)
  },
  handleChatSubscription({ commit }, { mutation, data }) {
    switch (mutation) {
      case 'NEW_CHAT':
        commit('PUSH_NEW_CHAT', data)
        break

      default:
        console.info('from default', mutation)
        break
    }
  }
}
// getters ==============================
export const getters = {
  getChatList: state => state.chatList
}
