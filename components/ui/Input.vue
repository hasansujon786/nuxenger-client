<template>
  <label class="block">
    <span
      v-if="label"
      class="font-semibold mb-1 inline-block tracking-wide text-sm text-gray-700"
      >{{ label }}</span
    >
    <input
      v-bind="$attrs"
      class="px-3 border-2 outline-none focus:border-gray-500 rounded-lg w-full"
      :class="height"
    />
  </label>
</template>

<script>
export default {
  props: {
    label: {
      type: String
    },
    height: {
      type: String,
      default: 'h-12'
    }
  }
}
</script>

<style></style>
