<template>
  <div class="dropdown relative">
    <a
      href="#"
      class="dropdown__icon-link text-gray-600"
      ref="dropBtn"
      @click.prevent="handleToggle"
      @keydown.esc.exact="handleExit"
      @keydown.shift.tab="handleExit"
    >
      <ui-icon :icon="icon" />
    </a>
    <div
      v-if="isOpen"
      :class="slotpos"
      class="dropdown__palate absolute z-50 right-0 z-10 mt-1 bg-white border rounded shadow-md"
    >
      <slot v-bind="{ handleExit, handleToggle }"></slot>
    </div>
  </div>
</template>

<script>
import IconVue from './Icon.vue'
export default {
  data() {
    return {
      isOpen: false
    }
  },
  props: {
    icon: {
      type: String,
      default: 'more-h'
    },
    slotpos: {
      type: String,
      default: 'right-0'
    }
  },
  methods: {
    handleToggle() {
      this.isOpen = !this.isOpen
      this.focusBtn()
    },
    handleExit() {
      this.isOpen = false
      this.focusBtn()
    },
    focusBtn() {
      this.$refs.dropBtn.focus()
    }
  },
  components: {
    uiIcon: IconVue
  }
}
</script>

<style></style>
