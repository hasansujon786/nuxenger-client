export * from './chat'
export * from './message'
export * from './user'

/* 
const { data } = await this.$apollo.mutate({
  mutation: 'mutation name',
  variables: {}
}) 
*/

/*
const { data } = await this.$apollo.query({
  query: 'Query name',
  variables: {}
}) 
*/

/* 
apollo: {
  // Subscriptions
  $subscribe: {
    // When a tag is added
    message: {
      query: MESSAGE_SUBSCRIPTION,
      variables() {
        return {
          chatId: this.$route.params.chatId
        }
      },
      result({ data }) {
        const newMsg = data.message.data
        this.chat.messages.push(newMsg)
      }
    }
  }
} 
*/

/**
 * this.$router.app.$apollo
 * access $apollo in Vuex
 */
