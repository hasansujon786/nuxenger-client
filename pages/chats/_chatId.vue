<template>
  <div class="flex" style="height: calc(100vh - 52px)">
    <RecentItemList />
    <section class="_chat-page flex-grow">
      <!-- head -->
      <div
        style="grid-area: chat-head"
        class="px-3 flex justify-between items-center bg-app-light shadow border-b"
      >
        <div class="flex">
          <Avater />
          <span class="ml-1">
            <h2 class="font-semibold capitalize text-sm text-gray-800">
              {{ head.title ? head.title : 'Loading...' }}
            </h2>
            <p class="text-xs text-gray-600 leading-none tracking-wider">Active</p>
          </span>
        </div>
        <div class="flex">
          <Icon />
          <a @click.prevent="toggleSidebarRight('active')" href="#" title="Active Users">
            <Icon icon="zap" />
          </a>
        </div>
      </div>
      <!-- head end -->

      <div id="chat-box" style="grid-area: chat-box" class="custom-scrollbar">
        <div class="px-3 pb-6">
          <chat-item :msg="msg" v-for="msg in messages" :key="msg.id" class="mt-3" />
        </div>
      </div>

      <chat-input @submit="sendNewMessage" style="grid-area: chat-input" class="" />
    </section>
    <ActiveItemList v-if="sidebarRight === 'active'" />
  </div>
</template>

<script>
import { messageMixins } from '~/mixins'
import { MESSAGE_SUBSCRIPTION } from '~/gql'
import { mapGetters, mapActions } from 'vuex'
import ChatInput from '~/components/chatbox/ChatInput.vue'
import ChatItem from '~/components/chatbox/ChatItem.vue'
import Icon from '~/components/ui/Icon.vue'
import Avater from '~/components/ui/Avater.vue'
import RecentItemList from '~/components/sidebar/RecentItemList.vue'
import ActiveItemList from '~/components/sidebar/ActiveItemList.vue'

export default {
  layout: 'app',
  middleware: 'auth',
  data() {
    return {
      sidebarRight: 'active'
    }
  },
  computed: {
    ...mapGetters({ head: 'messages/head', messages: 'messages/messages' })
  },
  created() {
    this.mixGetMessagesFromAChat(this.$route.params.chatId)
  },
  methods: {
    ...mapActions({
      handleMessageSubscription: 'messages/handleMessageSubscription'
    }),
    toggleSidebarRight(payload) {
      this.sidebarRight = this.sidebarRight === payload ? '' : payload
    },
    sendNewMessage(newMsg) {
      this.mixSendMessage({ chatId: this.$route.params.chatId, body: newMsg })
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
          if (data.message.mutation === 'NEW_MESSAGE') {
            setTimeout(() => {
              const chatBox = document.getElementById('chat-box')
              chatBox.scrollTo({ top: chatBox.scrollHeight, left: 0, behavior: 'auto' })
            }, 0)
          }
        }
      }
    }
  },
  components: {
    ChatItem,
    ChatInput,
    Avater,
    Icon,
    RecentItemList,
    ActiveItemList
  },
  mixins: [messageMixins]
}
</script>

<style scoped>
._chat-page {
  display: grid;
  grid-template-rows: 52px auto 90px;
  grid-template-areas:
    'chat-head'
    'chat-box'
    'chat-input';
}
</style>
