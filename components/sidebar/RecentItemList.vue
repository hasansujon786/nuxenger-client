<template>
  <div>
    <recent-item link="/chats/124" v-for="(item, index) in 20" :key="index" />
  </div>
</template>

<script>
import RecentItem from '~/components/sidebar/RecentItem.vue'
export default {
  components: {
    RecentItem
  }
}
</script>
