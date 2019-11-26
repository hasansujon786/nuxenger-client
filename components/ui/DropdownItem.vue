<template>
  <a
    @click.prevent="handleClick"
    @keydown.prevent.esc.exact="func.handleExit"
    href="#"
    class="py-1 px-3 w-full block capitalize text-xs outline-none text-gray-700 font-semibold focus:bg-gray-200 hover:bg-gray-200"
    ><slot></slot
  ></a>
</template>

<script>
export default {
  props: {
    props: {
      type: Boolean
    },
    func: {
      type: Object
    }
  },
  methods: {
    handleClick() {
      const text = this.$slots.default[0].text.toLowerCase()
      this.$emit('onClick', text)
      this.func.handleExit()
    }
  }
}
</script>

<style></style>
