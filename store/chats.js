export const state = () => ({
  chatList: []
})
// mutations ==============================
export const mutations = {
  SET_CHAT_LIST(state, chats) {
    state.chatList = chats
  },
  PUSH_NEW_CHAT(state, chat) {
    state.chatList.unshift(chat)
  }
}
// actions ==============================
export const actions = {
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
