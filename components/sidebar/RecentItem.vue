<template>
  <nuxt-link
    :to="`/chats/${link}`"
    class="recent-item flex items-center mt-1 px-2 py-2 rounded-lg hover:bg-gray-200 "
  >
    <section>
      <avater size="lg" />
    </section>

    <section class="ml-1 text-sm flex-1 ">
      <div class="flex justify-between items-center">
        <p class="font-semibold">{{ name }}</p>

        <span class="flex items-center relative">
          <dropdown #default="{ ...otherProps }">
            <dropdown-item @onClick="handleDeleteChat(link)" :func="otherProps"
              >Delete</dropdown-item
            >
          </dropdown>

          <span class="text-gray-600" style="font-size: 13px">Tue</span>
        </span>
      </div>

      <p class="text-gray-600 " style="font-size: 13px; ">
        {{ mixShortentText(lastMsg.body, 33) }}
      </p>
    </section>
  </nuxt-link>
</template>

<script>
import Avater from '~/components/ui/Avater.vue'
import Icon from '~/components/ui/Icon.vue'
import Dropdown from '~/components/ui/Dropdown.vue'
import DropdownItem from '~/components/ui/DropdownItem.vue'
import { formatTextMixin, chatMixins } from '~/mixins'

export default {
  data() {
    return {
      isOpen: false,
      moreOptions: ['Inof', 'Delete']
    }
  },
  props: ['link', 'name', 'lastMsg'],
  methods: {
    test(op) {
      console.log(op)
    },
    handleDeleteChat(chatId) {
      this.isOpen = false
      this.mixDeleteAGroupChat(chatId)
    }
  },
  components: {
    Avater,
    uiIcon: Icon,
    Dropdown: Dropdown,
    DropdownItem: DropdownItem
  },
  mixins: [formatTextMixin, chatMixins]
}
</script>

<style lang="scss" scoped>
.recent-item {
  &:hover {
    .more-icon {
      opacity: 1;
    }
  }
}
.recent-item.nuxt-link-active {
  /* border-left: 4px solid #38a169; */
  @apply bg-gray-200;
}
</style>
