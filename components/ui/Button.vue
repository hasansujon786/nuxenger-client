<template>
  <button v-bind="$attrs" v-on="$listeners" class="bg-gray-300 px-6 py-3 font-semibold rounded-lg">
    <slot>I'm a button</slot>
  </button>
</template>

<script>
export default {}
</script>
