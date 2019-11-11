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
          <a @click.prevent="isOpen = !isOpen" href="#" class="more-icon text-gray-600 opacity-0"
            ><ui-icon icon="more-h"></ui-icon
          ></a>

          <span class="text-gray-600" style="font-size: 13px">Tue</span>

          <div
            v-if="isOpen"
            class="absolute right-0 z-10 mt-1 bg-white border rounded shadow-md"
            style="top: 1.8rem;"
          >
            <a
              @click.prevent="handleDeleteChat(link)"
              class="py-1 px-3 block text-sm outline-none text-gray-700 font-semibold focus:bg-gray-200 hover:bg-gray-200"
              href="#"
              >Delete</a
            >
          </div>
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
import DropdownVue from '../ui/Dropdown.vue'
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
    handleDeleteChat(chatId) {
      this.isOpen = false
      this.mixDeleteAGroupChat(chatId)
    }
  },
  components: {
    Avater,
    uiDropdown: DropdownVue,
    uiIcon: Icon
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
