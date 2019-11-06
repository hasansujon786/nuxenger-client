<template>
  <div class="relative">
    <button
      v-show="isOpen"
      tabindex="-1"
      @click="$emit('toggle')"
      class="fixed inset-0 w-full h-full cursor-default"
    ></button>
    <a
      ref="link"
      class="relative"
      href="#"
      @keydown.esc="handleExit"
      @click.prevent="$emit('toggle')"
    >
      <slot></slot>
    </a>

    <section
      v-show="isOpen"
      class="dropdown-body absolute mt-1 bg-white border rounded shadow-md"
      style="min-width: 200px;"
    >
      <a
        href="#"
        @click="handleItemClick(item)"
        @keydown.esc="handleExit"
        class="py-1 px-3 block text-sm outline-none text-gray-700 font-semibold focus:bg-gray-300 hover:bg-gray-300"
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
      this.$emit('toggle')
      this.$emit('item-click', item)
      this.$refs.link.focus()
    },
    handleExit() {
      this.$emit('toggle')
      this.$refs.link.focus()
    }
  }
}
</script>
