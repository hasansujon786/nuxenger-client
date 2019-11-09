<template>
  <form @submit.prevent="handleOnNewMsgSubmit" class="px-4 border flex items-center">
    <div
      class="chat-input h-12 w-full rounded-lg border-2 border-gray-400 text-gray-900 flex items-stretch truncate tracking-wide text-base"
      style="background: #EDF2F7"
    >
      <input
        v-model="newMsg"
        type="text"
        class="bg-transparent outline-none flex-grow px-3"
        placeholder="Type a message..."
      />
      <input
        class="outline-none px-3 bg-gray-400 border-l border-gray-400 text-sm text-gray-600"
        type="submit"
        value="Send"
      />
    </div>
  </form>
</template>

<script>
import { messageMixins } from '~/mixins'

export default {
  data() {
    return {
      newMsg: ''
    }
  },
  methods: {
    handleOnNewMsgSubmit() {
      // TODO : Validate from submition
      if (!this.newMsg) return
      this.mixSendMessage({ chatId: this.$route.params.chatId, body: this.newMsg })
      this.newMsg = ''
    }
  },
  mixins: [messageMixins]
}
</script>

<style lang="scss" scoped>
.chat-input {
  &:focus-within {
    & {
      @apply border-gray-500;
    }
  }
}
</style>
