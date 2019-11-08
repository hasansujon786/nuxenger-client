import { SEND_MESSAGE_MUTATION } from '../gql'
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
    }
  }
}
