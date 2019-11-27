<template>
  <form @submit.prevent="handleOnNewMsgSubmit" class="px-4 border flex items-center">
    <div
      class="chat-input shadow bg-white h-12 w-full rounded-lg border text-gray-900 flex items-stretch text-base"
    >
      <input
        v-model="newMsg"
        type="text"
        class="bg-transparent text-gray-800 placeholder-gray-600 outline-none flex-grow px-4 text-base"
        placeholder="Write a message ..."
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
      this.$emit('submit', this.newMsg)
      this.newMsg = ''
    }
  }
}
</script>

<style lang="scss" scoped>
.chat-input {
  &:focus-within {
    & {
      @apply border-gray-400;
    }
  }
}
</style>
