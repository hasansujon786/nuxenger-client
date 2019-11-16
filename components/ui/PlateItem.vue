<template>
  <a
    href="#"
    v-bind="$attrs"
    v-on="$listeners"
    class="py-1 px-3 block text-sm outline-none text-gray-700 font-semibold focus:bg-gray-200 hover:bg-gray-200"
    ><slot></slot
  ></a>
</template>

<script>
export default {}
</script>

<style></style>
