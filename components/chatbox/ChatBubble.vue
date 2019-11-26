<template functional>
  <div
    class="chat-bubble overflow-hidden bg-white shadow px-6 py-3 inline-block text-sm max-w-lg"
    :class="[data.class, data.staticClass]"
  >
    {{ props.msgBody }}
  </div>
</template>

<script>
export default {
  props: {
    msgBody: {
      type: String
    }
  }
}
</script>

<style>
.chat-bubble {
  border-radius: 20px;
  word-wrap: break-word;
}
</style>
