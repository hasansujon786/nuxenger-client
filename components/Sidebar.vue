<template>
  <div class="border-r bg-app-light shadow z-40" style="width: 300px">
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
