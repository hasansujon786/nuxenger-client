<template>
  <div class="chat-item flex items-center" :class="{ right: isUser }">
    <div class="avater-wrapper self-start">
      <avater :title="msg.sender.name" size="sm" />
    </div>
    <dropdown #default="{ ...otherProps }">
      <dropdown-item @onClick="test" :func="otherProps">Home</dropdown-item>
      <dropdown-item @onClick="test" :func="otherProps">About</dropdown-item>
      <dropdown-item @onClick="test" :func="otherProps">Delete</dropdown-item>
    </dropdown>
    <div class="mx-1">
      <chat-bubble :msgBody="msg.body" />
    </div>
  </div>
</template>

<script>
import ChatBubble from '~/components/chatbox/ChatBubble.vue'
import Avater from '~/components/ui/Avater.vue'
import Dropdown from '~/components/ui/Dropdown.vue'
import DropdownItem from '~/components/ui/DropdownItem.vue'

export default {
  props: {
    msg: {}
  },
  computed: {
    isUser() {
      return this.$store.getters['user/getauthUser'].id === this.msg.sender.id
    }
  },
  methods: {
    test(option) {
      console.log(option)
    }
  },
  components: {
    Avater,
    ChatBubble,
    Dropdown: Dropdown,
    DropdownItem: DropdownItem
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
