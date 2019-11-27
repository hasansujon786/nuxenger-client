<template>
  <div style="min-width: 200px">
    <sidebar-wrapper>
      <a v-for="item in 30" href="#" class="flex items-center my-2 px-2 py-2 hover:bg-gray-200">
        <Avater size="sm" />
        <span class="flex-grow ml-1 flex items-baseline justify-between">
          <p class="font-semibold capitalize text-xs text-gray-800">User name</p>
          <p class="text-xs text-gray-600 tracking-wider">Active</p>
        </span>
      </a>
    </sidebar-wrapper>
  </div>
</template>

<script>
import SidebarWrapper from '~/components/SidebarWrapper.vue'
import Avater from '~/components/ui/Avater.vue'

export default {
  name: 'ActiveItemList',
  components: {
    Avater,
    SidebarWrapper
  }
}
</script>

<style lang="css" scoped></style>
