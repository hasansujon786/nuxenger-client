<template>
  <form class="px-4 py-6 border">
    <div
      class="chat-input h-12 w-full rounded-lg border-2 border-gray-400 text-gray-900 flex items-stretch truncate tracking-wide text-base"
      style="background: #EDF2F7"
    >
      <input
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
export default {}
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
