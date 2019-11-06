<template>
  <div class="flex flex-col " style="height: calc(100vh - 64px)">
    <section class="flex-grow overflow-y-scroll ">
      <chat-item-list />
    </section>
    <chat-input />
  </div>
</template>

<script>
import ChatInput from '~/components/chatbox/ChatInput.vue'
import ChatItemList from '~/components/chatbox/ChatItemList.vue'
export default {
  layout: 'app',
  components: {
    ChatInput,
    ChatItemList
  }
}
</script>

<style></style>
