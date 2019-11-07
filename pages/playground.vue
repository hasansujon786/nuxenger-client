<template>
  <section class="h-screen bg-gray-900 text-white">
    <div class="p-40">
      <ui-button disabled></ui-button>
      <ui-button primary></ui-button>
      <ui-button secondary></ui-button>
      <ui-button></ui-button>
      <br />
      <br />
      <ui-button secondary outlined></ui-button>
      <ui-button primary outlined></ui-button>
      <ui-button outlined></ui-button>
    </div>
  </section>
</template>

<script>
import Button from '~/components/ui/Button.vue'

export default {
  components: {
    uiButton: Button
  }
}
</script>

<style></style>
