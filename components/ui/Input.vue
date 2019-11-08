<template>
  <label class="block">
    <span
      v-if="label"
      class="font-semibold mb-1 inline-block tracking-wide text-sm text-gray-700"
      >{{ label }}</span
    >
    <input
      v-bind="$attrs"
      v-bind:value="value"
      v-on="inputListeners"
      class="px-3 border-2 outline-none focus:border-gray-500 rounded-lg w-full"
      :class="height"
    />
  </label>
</template>

<script>
export default {
  name: 'baseInput',
  props: {
    value: {},
    label: {
      type: String
    },
    height: {
      type: String,
      default: 'h-12'
    }
  },
  computed: {
    inputListeners: function() {
      var vm = this
      // `Object.assign` merges objects together to form a new object
      return Object.assign(
        {},
        // We add all the listeners from the parent
        this.$listeners,
        // Then we can add custom listeners or override the
        // behavior of some listeners.
        {
          // This ensures that the component works with v-model
          input: function(event) {
            vm.$emit('input', event.target.value)
          }
        }
      )
    }
  }
}
</script>

<style></style>
