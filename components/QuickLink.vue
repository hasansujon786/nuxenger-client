<template>
  <div class="bg-gray-100 border-r" style="grid-area: quicklink">
    <section class="flex flex-col items-center">
      <a class="mt-3" href="#"><icon icon="compass" size="lg"/></a>
      <a class="mt-2" href="#"><icon icon="message-sq" size="lg"/></a>
      <a class="mt-2" href="#"><icon icon="zap" size="lg"/></a>
      <a class="mt-2" href="#"><icon icon="plus" size="lg"/></a>
      <a class="mt-2" href="#"><icon icon="user" size="lg"/></a>
    </section>
  </div>
</template>

<script>
import Icon from '~/components/ui/Icon.vue'
export default {
  components: {
    Icon
  }
}
</script>

