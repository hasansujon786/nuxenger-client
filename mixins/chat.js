import { START_GROUP_CHAT_MUTATION, CHAT_SUBSCRIPTION, DELETE_A_GROUP_CHAT_MUTATION } from '../gql'

export const chatMixins = {
  methods: {
    async mixStartGroupChat({ title, userIds }) {
      try {
        const { data } = await this.$apollo.mutate({
          mutation: START_GROUP_CHAT_MUTATION,
          variables: { title, userIds }
        })

        if (data) {
          // TODO: Show user confirm chat has created
          // console.log(data)
        }
      } catch (err) {
        console.log(err)
      }
    },
    async mixDeleteAGroupChat(chatId) {
      try {
        // TODO: push out the user from deleted chat route
        const { data } = await this.$apollo.mutate({
          mutation: DELETE_A_GROUP_CHAT_MUTATION,
          variables: { chatId }
        })

        if (data) {
          // TODO: Show user confirm chat has deleted
          // console.log(data)
        }
      } catch (err) {
        console.log(err)
      }
    }
  }
}
