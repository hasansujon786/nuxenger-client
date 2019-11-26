<template>
  <div class="chat-item flex items-center" :class="{ right: isUser, left: !isUser }">
    <div class="avater-wrapper self-end -mb-5">
      <avater class="" :name="msg.sender.name" size="sm" />
    </div>

    <!-- TODO: Overflows for learger msgs  -->
    <div class="chat-bubble-wrapper mx-1">
      <chat-bubble class="rounded-none" :msgBody="msg.body" />
    </div>

    <div class="tools-wrapper opacity-0">
      <dropdown :direction="isUser ? 'right-0' : ''" #default="{ ...otherProps }">
        <dropdown-item @onClick="mixDeleteAMessage(msg.id)" :func="otherProps"
          >Delete</dropdown-item
        >
      </dropdown>
    </div>
  </div>
</template>

<script>
import { messageMixins } from '~/mixins'
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
  },
  mixins: [messageMixins]
}
</script>

<style scoped lang="scss">
.chat-item {
  &.right {
    justify-content: flex-end;
    .avater-wrapper {
      order: 10;
      @apply ml-1;
    }
    .chat-bubble-wrapper {
      order: 9;
    }
    .chat-bubble {
      @apply bg-indigo-500 text-white rounded-br-none;
    }
  }

  &.left {
    .avater-wrapper {
      @apply mr-1;
    }
    .chat-bubble {
      @apply rounded-bl-none;
    }
  }

  &:hover {
    .tools-wrapper {
      opacity: 1;
    }
  }
  .tools-wrapper:focus-within {
    opacity: 1;
  }
}
</style>
