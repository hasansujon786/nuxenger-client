<template>
  <div class="_chat-page h-screen">
    <section
      style="grid-area: chat-head"
      class="px-3 flex justify-between items-center bg-gray-100 border-b"
    >
      <span>
        <h2 class="font-semibold">{{ chatHead.title ? chatHead.title : 'Loading...' }}</h2>
        <p class="text-xs text-gray-600 tracking-wider">Active</p>
      </span>
      <ui-icon />
    </section>

    <section style="grid-area: chat-box" class="overflow-y-scroll">
      <div class="px-3 pb-6">
        <chat-item :msg="msg" v-for="msg in messages" :key="msg.id" class="mt-3" />
      </div>
    </section>

    <chat-input style="grid-area: chat-input" class="" />
  </div>
</template>

<script>
import { CHAT_QUERY, MESSAGE_SUBSCRIPTION } from '~/gql'
import ChatItem from '~/components/chatbox/ChatItem.vue'
import ChatInput from '~/components/chatbox/ChatInput.vue'
import Icon from '~/components/ui/Icon.vue'

export default {
  layout: 'app',
  data() {
    return {
      messages: [],
      chatHead: {}
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
        if (data.chat) {
          const { messages, ...othersProps } = data.chat
          this.chatHead = othersProps
          this.messages = messages
        }
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
          console.info('from default handleMessageSubscription', message.mutation, message.data)
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
    ChatItem,
    ChatInput,
    uiIcon: Icon
  }
}
</script>

<style scoped>
._chat-page {
  display: grid;
  grid-template-rows: 64px auto 90px;
  grid-template-areas:
    'chat-head'
    'chat-box'
    'chat-input';
}
</style>
