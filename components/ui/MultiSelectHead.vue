<template>
  <section
    class="absolute flex block w-full h-12 border-b "
    :class="{ 'border-transparent': !ms.isOpen }"
  >
    <ul class="hide-scroll-bars input-bg-color h-full flex items-center overflow-x-scroll">
      <PillWithCross
        v-for="(user, i) in ms.selectedUsers"
        :close="ms.removeAnUser(user)"
        :userName="user.name"
        :key="i"
      />
    </ul>
    <label
      for="ms-input"
      :class="{ 'input-bg-color': ms.selectedUsers.length }"
      class="flex-1 flex items-center justify-end h-full cursor-text"
    >
      <span
        v-if="ms.selectedUsers.length > 2"
        class="text-xs font-bold text-gray-600 truncate pl-2 block"
        >{{ ms.selectedUsers.length }} selected</span
      >
      <span class="px-2 h-full flex items-center cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          :class="{ rotate: ms.isOpen }"
          class="text-gray-500 feather feather-chevron-down"
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </span>
    </label>
  </section>
</template>

<script>
import PillWithCross from './PillWithCross.vue'

export default {
  props: {
    ms: {
      type: Object
    }
  },
  components: {
    PillWithCross
  },
  created() {
    console.log(this.ms)
  }
}
</script>

<style></style>
