<template>
  <div class="pl-2 pr-1 pt-1 pb-2">
    <recent-item
      v-for="chat in chatList"
      :name="chat.title"
      :lastMsg="chat.lastMessage || {}"
      :key="chat.id"
      :link="chat.id"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import RecentItem from '~/components/sidebar/RecentItem.vue'

export default {
  computed: {
    ...mapGetters({ chatList: 'chats/getChatList' })
  },
  components: {
    RecentItem
  }
}
</script>
