<template>
  <nav class="bg-gray-100 border-b flex " style="grid-area: nav">
    <section class="w-64 border-r flex items-center justify-center">
      <Avater />
      <h1 class="text-4xl leading-none -mt-2 ml-3">nuxenger</h1>
    </section>

    <section class="flex-grow px-3 flex justify-between items-center">
      <span>
        <h2 class="font-semibold">Kuddus khan</h2>
        <p class="text-xs text-gray-600 tracking-wider">Active</p>
      </span>
      <icon />
    </section>
  </nav>
</template>

<script>
import Avater from '~/components/ui/Avater.vue'
import Icon from '~/components/ui/Icon.vue'

export default {
  components: {
    Icon,
    Avater
  }
}
</script>
