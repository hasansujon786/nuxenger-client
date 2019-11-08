<template>
  <nuxt-link
    :to="`/chats/${link}`"
    class="recent-item block mt-1 px-2 py-2 flex items-center rounded-lg hover:bg-gray-300 "
  >
    <section>
      <avater size="lg" />
    </section>

    <section class="flex-grow ml-1 text-sm bg-gray-50 truncate">
      <div class="flex justify-between items-baseline">
        <p class="font-semibold">{{ name }}</p>
        <span class="text-gray-600" style="font-size: 13px">Tue</span>
      </div>
      <p class="text-gray-600 mt-1 truncate" style="font-size: 13px">
        {{ lastMsg.body ? lastMsg.body : '...' }}
      </p>
    </section>
  </nuxt-link>
</template>

<script>
import Avater from '~/components/ui/Avater.vue'

export default {
  props: ['link', 'name', 'lastMsg'],
  components: {
    Avater
  }
}
</script>

<style scoped>
/* .recent-item {
  border-left: 4px solid transparent;
} */
.recent-item.nuxt-link-active {
  /* border-left: 4px solid #38a169; */
  @apply bg-gray-300;
}
</style>
