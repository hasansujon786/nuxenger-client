<template>
  <div class="dropdown relative">
    <a
      href="#"
      class="dropdown__icon-link block rounded-full text-gray-600"
      ref="dropBtn"
      @click.prevent="handleToggle"
      @keydown.esc.exact="handleExit"
      @keydown.shift.tab="handleExit"
    >
      <slot name="icon">
        <ui-icon :icon="icon" />
      </slot>
    </a>
    <div
      v-if="isOpen"
      :class="[direction]"
      :style="{'min-width':  width + 'px'}"
      v-on-clickaway="handleExit"
      class="dropdown__palate absolute z-10 mt-1 bg-white border rounded shadow-md"
    >
      <slot v-bind="{ handleExit, handleToggle }"></slot>
    </div>
  </div>
</template>

<script>
import IconVue from './Icon.vue'
import { mixin as clickaway } from 'vue-clickaway'

export default {
  mixins: [clickaway],
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
    width: {
      default: 10
    },
    direction: {
      type: String,
      default: 'left-0'
    }
  },
  methods: {
    handleToggle() {
      this.isOpen = !this.isOpen
    },
    handleExit() {
      this.isOpen = false
    }
  },
  components: {
    uiIcon: IconVue
  }
}
</script>
