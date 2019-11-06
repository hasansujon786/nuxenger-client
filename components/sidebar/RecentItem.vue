<template>
  <nuxt-link
    :to="link"
    class="recent-item px-3 block border-b py-2 hover:bg-gray-200 flex items-center"
  >
    <section>
      <avater size="md" />
    </section>

    <section class="ml-2 text-sm truncate">
      <div class="flex justify-between items-baseline">
        <p class="font-semibold">Bruce Wayn</p>
        <span class="text-gray-600" style="font-size: 13px">Tue</span>
      </div>
      <p class="text-gray-600 mt-1" style="font-size: 13px">
        alias ducimus ullam facilis nostrum blanditiis inventore error doloribus id.
      </p>
    </section>
  </nuxt-link>
</template>

<script>
import Avater from '~/components/ui/Avater.vue'

export default {
  props: {
    link: {
      type: String,
      required: true
    },
    lastMsg: {
      type: String
    },
    userName: {
      type: String
    }
  },
  components: {
    Avater
  }
}
</script>

<style scoped>
.recent-item {
  border-left: 4px solid transparent;
}
.recent-item.nuxt-link-active {
  border-left: 4px solid #38a169;
  @apply bg-gray-200;
}
</style>
