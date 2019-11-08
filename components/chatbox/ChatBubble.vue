<template functional>
  <div
    class="chat-bubble bg-gray-300 px-6 py-3 inline-block text-sm max-w-lg"
    style="border-radius: 20px;"
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
