<template>
  <nav class="bg-gray-100 border-b flex " style="grid-area: nav">
    <section class="border-r flex items-center pl-2 pr-1" style="width: 300px">
      <Avater />
      <h1 class="text-4xl font-semibold leading-none -mt-2 ml-2 mr-auto">nuxenger</h1>

      <icon icon="bell" />
      <icon icon="more" />
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
