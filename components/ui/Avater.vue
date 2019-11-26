<template functional>
  <div
    v-bind="data.attrs"
    :title="props.name"
    class="bg-gray-400 rounded-full truncate flex items-center justify-center text-gray-700"
    :class="[props.size, data.class, data.staticClass]"
  >
    <img v-if="props.img" class="w-full h-full object-cover" :src="props.img" />
    <div v-else-if="props.name" class="text-center select-none font-bold capitalize">{{ props.name.charAt() }}</div>
    <svg
      v-else
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="feather feather-user"
    >
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
      <circle cx="12" cy="7" r="4"></circle>
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    img: String,
    name: String,
    size: {
      type: String,
      default: 'md'
    },
  }
}
</script>

<style scoped>
.lg {
  width: 48px;
  height: 48px;
}
.md {
  width: 36px;
  height: 36px;
}
.sm {
  width: 32px;
  height: 32px;
}
</style>
