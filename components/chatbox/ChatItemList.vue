<template>
  <div class="px-3 pb-6">
    <chat-item :msg="msg" v-for="msg in messages" :key="msg.id" class="mt-3" />
  </div>
</template>

<script>
import { CHAT_QUERY } from '~/gql'
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
    }
  },
  components: {
    ChatItem
  }
}
</script>
