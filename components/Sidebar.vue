<template>
  <div class="w-64 border-r">
    <div class="overflow-y-scroll custom-scrollbar" style="height: calc(100vh - 64px)">
      <recent-item-list />
    </div>
  </div>
</template>

<script>
import RecentItemList from '~/components/sidebar/RecentItemList.vue'

export default {
  components: {
    RecentItemList
  }
}
</script>
