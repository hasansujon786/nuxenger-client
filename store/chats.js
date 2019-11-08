export const state = () => ({
  chatList: []
})
// mutations ==============================
export const mutations = {
  SET_CHAT_LIST(state, chats) {
    state.chatList = chats
  }
}
// actions ==============================
export const actions = {
  setChatList({ commit }, chats) {
    commit('SET_CHAT_LIST', chats)
  }
}
// getters ==============================
export const getters = {
  getChatList: state => state.chatList
}
