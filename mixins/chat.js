import { START_GROUP_CHAT_MUTATION } from '../gql'

export const chatMixins = {
  methods: {
    async mixStartGroupChat({ title, userIds }) {
      try {
        const { data } = await this.$apollo.mutate({
          mutation: START_GROUP_CHAT_MUTATION,
          variables: { title, userIds }
        })

        if (data) {
          console.log(data)
        }
      } catch (err) {
        console.log(err)
      }
    }
  }
}
