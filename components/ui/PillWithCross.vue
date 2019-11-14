<template functional>
  <li class="pillItems flex items-center pl-3 pr-2 mx-1 py-1 rounded-lg bg-primary select-none">
    <span class="block text-sm font-semibold truncate capitalize"> {{ props.userName }} </span>
    <a
      href="#"
      @click.prevent="props.close(props.userName)"
      class="ml-1 text-gray-600 hover:text-red-600 focus:text-red-600 outline-none"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="feather feather-x inline-block w-5 h-5"
      >
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    </a>
  </li>
</template>

<script>
export default {
  name: 'PillWithCross',
  props: {
    userName: {
      type: String,
      default: 'User name'
    },
    close: {
      type: Function
    }
  }
}
</script>
