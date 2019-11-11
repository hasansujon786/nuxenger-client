import { SEND_MESSAGE_MUTATION, DELETE_A_MESSAGE_MUTATION } from '../gql'
export const messageMixins = {
  methods: {
    async mixSendMessage({ chatId, body }) {
      try {
        const { data } = await this.$apollo.mutate({
          mutation: SEND_MESSAGE_MUTATION,
          variables: { chatId, body }
        })

        if (data.sendMessage) {
          // TODO: show some confirmation that msg has send.
        }
      } catch (err) {
        console.log(err)
      }
    },
    async mixDeleteAMessage(messageId) {
      try {
        const { data } = await this.$apollo.mutate({
          mutation: DELETE_A_MESSAGE_MUTATION,
          variables: { messageId }
        })
        if (data.deleteAMessage) {
          // TODO: show some confirmation that msg has delete.
        }
      } catch (err) {
        console.log(err)
      }
    }
  }
}
