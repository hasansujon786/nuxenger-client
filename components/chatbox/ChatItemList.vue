<template>
  <div class="px-3 pb-6">
    <chat-item :msg="msg" v-for="msg in messages" :key="msg.id" class="mt-3" />
  </div>
</template>

<script>
import { CHAT_QUERY, MESSAGE_SUBSCRIPTION } from '~/gql'
import ChatItem from '~/components/chatbox/ChatItem.vue'

export default {
  data() {
    return {
      messages: []
    }
  },
  created() {
    this.getSelectedChat(this.$route.params.chatId)
  },
  methods: {
    async getSelectedChat(chatId) {
      try {
        const { data } = await this.$apollo.mutate({
          mutation: CHAT_QUERY,
          variables: { chatId }
        })
        this.messages = data.chat.messages
      } catch (err) {
        console.log(err)
      }
    },
    handleMessageSubscription(message) {
      switch (message.mutation) {
        case 'NEW_MESSAGE':
          this.messages.push(message.data)
          break

        default:
          console.info('from default', message.mutation)
          break
      }
    }
  },
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
          // TODO: update last msg on new msg
          this.handleMessageSubscription(data.message)
        }
      }
    }
  },

  components: {
    ChatItem
  }
}
</script>
