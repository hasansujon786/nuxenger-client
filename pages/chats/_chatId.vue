<template>
  <div class="_chat-page h-screen">
    <section
      style="grid-area: chat-head"
      class="px-3 flex justify-between items-center bg-gray-100 border-b"
    >
      <span>
        <h2 class="font-semibold">{{ head.title ? head.title : 'Loading...' }}</h2>
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
import { messageMixins } from '~/mixins'
import { MESSAGE_SUBSCRIPTION } from '~/gql'
import { mapGetters, mapActions } from 'vuex'
import ChatInput from '~/components/chatbox/ChatInput.vue'
import ChatItem from '~/components/chatbox/ChatItem.vue'
import Icon from '~/components/ui/Icon.vue'

export default {
  layout: 'app',
  computed: {
    ...mapGetters({ head: 'messages/head', messages: 'messages/messages' })
  },
  created() {
    this.mixGetMessagesFromAChat(this.$route.params.chatId)
  },
  methods: {
    ...mapActions({
      handleMessageSubscription: 'messages/handleMessageSubscription'
    })
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
  },
  mixins: [messageMixins]
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
