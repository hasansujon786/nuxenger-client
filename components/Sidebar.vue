<template>
  <div class="border-r" style="width: 300px">
    <Navbar />
    <div class="overflow-y-scroll custom-scrollbar" style="height: calc(100vh - 64px)">
      <recent-item-list />
    </div>
  </div>
</template>

<script>
import RecentItemList from '~/components/sidebar/RecentItemList.vue'
import Navbar from '~/components/Navbar.vue'

export default {
  components: {
    Navbar,
    RecentItemList
  }
}
</script>
