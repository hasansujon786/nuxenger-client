const getDefaultState = () => {
  return {
    head: {},
    messages: []
  }
}
export const state = () => getDefaultState()

// mutations ==============================
export const mutations = {
  RESET_STATE(state) {
    // https://tahazsh.com/vuebyte-reset-module-state
    Object.assign(state, getDefaultState())
  },
  SET_MESSAGES_FROM_A_CHAT(state, { messages, ...head }) {
    state.messages = messages
    state.head = head
  },
  PUSH_NEW_MESSAGE(state, newMessage) {
    state.messages.push(newMessage)
  },
  PUlL_OUT_DELETED_MESSAGE(state, oldMessage) {
    const index = state.messages.findIndex(message => message.id === oldMessage.id)
    state.messages.splice(index, 1)
  }
}

// actions ==============================
export const actions = {
  resetMessagesState({ commit }) {
    commit('RESET_STATE')
  },
  async setMessagesFromAChat({ commit }, chat) {
    commit('SET_MESSAGES_FROM_A_CHAT', chat)
  },
  handleMessageSubscription({ commit }, { mutation, data }) {
    switch (mutation) {
      case 'NEW_MESSAGE':
        commit('PUSH_NEW_MESSAGE', data)
        break

      case 'DELETE_MESSAGE':
        commit('PUlL_OUT_DELETED_MESSAGE', data)
        break

      default:
        console.info('handleMessageSubscription', mutation, data)
        break
    }
  }
}

// getters ==============================
export const getters = {
  head: state => state.head,
  messages: state => state.messages
}
