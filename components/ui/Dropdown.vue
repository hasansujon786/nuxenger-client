<template>
  <div class="relative">
    <button
      class="text-gray-600"
      ref="dropBtn"
      @keydown.esc.exact="handleExit"
      @keydown.shift.tab="handleExit"
      @click="handleToggle"
    >
      <ui-icon icon="more-h" />
    </button>
    <div :class="slotpos" class="absolute right-0 z-10 mt-1 bg-white border rounded shadow-md">
      <slot v-if="isOpen" v-bind="{ handleExit, handleToggle }"></slot>
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
  created() {
    console.log(this.$scopedSlots)
    console.log(this.$slots)
  },
  components: {
    uiIcon: IconVue
  }
}
</script>

<style></style>
