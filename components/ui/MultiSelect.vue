<template>
  <div class="multi-select input-bg-color max-w-md relative border-2 rounded-lg overflow-hidden">
    <section
      class="absolute flex block w-full h-12 border-b "
      :class="{ 'border-transparent': !isOpen }"
    >
      <ul class="hide-scroll-bars input-bg-color h-full flex items-center overflow-x-scroll">
        <PillWithCross
          v-for="(user, i) in selectedUsers"
          :close="removeAnUser"
          :userName="user"
          :key="i"
        />
      </ul>
      <label
        for="ms-input"
        :class="{ 'input-bg-color': selectedUsers.length }"
        class="flex-1 flex items-center justify-end h-full cursor-text"
      >
        <span
          v-if="selectedUsers.length > 2"
          class="text-xs font-bold text-gray-600 truncate pl-2 block"
          >{{ selectedUsers.length }} selected</span
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
            :class="{ rotate: isOpen }"
            class="text-gray-500 feather feather-chevron-down"
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </span>
      </label>
    </section>

    <div :class="{ expended: isOpen }" class="multi-select__animated-object h-0"></div>

    <input
      placeholder="Search names, usernames"
      @keypress.enter="addAnUser"
      v-model="inputText"
      @focus="isOpen = true"
      @blur="isOpen = false"
      type="text"
      id="ms-input"
      class="block w-full px-3 h-12 outline-none"
    />
  </div>
</template>

<script>
import PillWithCross from './PillWithCross.vue'

export default {
  name: 'MultiSelect',

  data() {
    return {
      selectedUsers: [],
      isOpen: false,
      inputText: ''
    }
  },

  methods: {
    toggle() {
      this.isOpen = !this.isOpen
    },
    addAnUser() {
      this.selectedUsers.push(this.inputText)
      this.inputText = ''
      setTimeout(() => {
        const pillItems = document.querySelectorAll('.pillItems')
        const lastPillItem = pillItems[pillItems.length - 1]
        lastPillItem.scrollIntoView({ inline: 'end', behavior: 'smooth' })
      }, 10)
    },
    removeAnUser(removedUser) {
      this.selectedUsers = this.selectedUsers.filter(item => item !== removedUser)
    }
  },

  components: {
    PillWithCross,
  }
}
</script>

<style lang="scss" scoped>
.multi-select {
  &:focus-within {
    @apply border-gray-500;
  }

  &__animated-object {
    transition: height 280ms ease;
    &.expended {
      height: 48px;
    }
  }

  .feather-chevron-down {
    transition: transform 150ms ease-in;
    &.rotate {
      transform: rotate(180deg);
    }
  }
}

.input-bg-color {
  background-color: #fff;
}
</style>
