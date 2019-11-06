<template>
  <div class="chat-item flex items-center" :class="{ right: isUser }">
    <div class="avater-wrapper self-start">
      <avater />
    </div>
    <div class="mx-1">
      <chat-bubble msg="hello" />
    </div>
  </div>
</template>

<script>
import ChatBubble from '~/components/chatbox/ChatBubble.vue'
import Avater from '~/components/ui/Avater.vue'

export default {
  props: {
    isUser: {
      type: Boolean,
      default: false
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
  // border: 1px solid rgb(216, 214, 214);
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
