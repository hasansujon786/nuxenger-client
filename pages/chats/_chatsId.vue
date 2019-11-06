<template>
  <div class="flex flex-col " style="height: calc(100vh - 64px)">
    <section class="flex-grow overflow-y-scroll ">
      <div class="border mb-10" v-for="(item, index) in 15" :key="index">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, asperiores at nesciunt veniam
        reiciendis voluptatem omnis voluptates sapiente, ex modi ipsa vitae nisi earum.
        Consequuntur, culpa? Dolore possimus suscipit dignissimos.
      </div>
    </section>
    <chat-input />
  </div>
</template>

<script>
import ChatInput from '~/components/chatbox/ChatInput.vue'
export default {
  layout: 'app',
  components: {
    ChatInput
  }
}
</script>

<style></style>
