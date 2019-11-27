<template functional>
  <div
    class="overflow-y-scroll custom-scrollbar bg-app-light shadow z-40 sticky"
    :style="{ height: `calc(100vh - ${props.minusHeight}px)`, top: `${props.minusHeight}px` }"
    :class="[data.class, data.staticClass]"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'SidebarWrapper',
  props: {
    minusHeight: {
      default: 52
    }
  }
}
</script>
