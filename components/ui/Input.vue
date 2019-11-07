<template>
  <label class="">
    <span class="font-semibold mb-1 inline-block tracking-wide text-sm text-gray-700">{{
      label
    }}</span>
    <input
      v-bind="$attrs"
      class="h-10 px-3 border-2 outline-none focus:border-gray-600 rounded-lg text-sm w-full"
    />
  </label>
</template>

<script>
export default {
  props: {
    label: {
      type: String
    }
  }
}
</script>

<style></style>
