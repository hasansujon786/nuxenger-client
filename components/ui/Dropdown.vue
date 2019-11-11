<template>
  <div class="relative">
    <button
      v-show="isOpen"
      tabindex="-1"
      @click="$emit('close')"
      class="fixed z-10 inset-0 w-full h-full cursor-default bg-gray-900 opacity-0"
    ></button>
    <a
      ref="link"
      class="relative"
      href="#"
      @keydown.esc.exact="handleExit"
      @keydown.shift.tab="handleExit"
      @click.prevent="$emit('toggle')"
    >
      <slot></slot>
    </a>

    <section
      v-show="isOpen"
      class="dropdown-body absolute z-10 mt-1 bg-white border rounded shadow-md"
      style="min-width: 200px;"
    >
      <a
        href="#"
        @click.prevent="handleItemClick(item)"
        @keydown.esc="handleExit"
        class="py-1 px-3 block text-sm outline-none text-gray-700 font-semibold focus:bg-gray-200 hover:bg-gray-200"
        v-for="(item, index) in list"
        :key="index"
        >{{ item }}</a
      >
    </section>
  </div>
</template>

<script>
export default {
  props: {
    isOpen: {
      type: Boolean,
      default: false
    },
    list: {
      type: Array,
      required: true
    }
  },
  methods: {
    handleItemClick(item) {
      this.$emit('item-click', item)
      this.handleExit()
    },
    handleExit() {
      this.$emit('close')
      this.$refs.link.focus()
    }
  }
}
</script>
