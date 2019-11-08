<template>
  <div class="chat-item flex items-center" :class="{ right: isUser }">
    <div class="avater-wrapper self-start">
      <avater :title="msg.sender.name" size="sm" />
    </div>
    <div class="mx-1">
      <chat-bubble :msgBody="msg.body" />
    </div>
  </div>
</template>

<script>
import ChatBubble from '~/components/chatbox/ChatBubble.vue'
import Avater from '~/components/ui/Avater.vue'

export default {
  props: {
    msg: {}
  },
  computed: {
    isUser() {
      return this.$store.getters['user/getauthUser'].id === this.msg.sender.id
    }
  },
  components: {
    Avater,
    ChatBubble
  }
}
</script>

<style scoped lang="scss">
.chat-item {
  &.right {
    justify-content: flex-end;
    .avater-wrapper {
      order: 10;
    }
    .chat-bubble {
      @apply bg-green-600 text-white;
    }
  }
}
</style>
