<template>
  <div class="h-full">
    index page
  </div>
</template>

<script>
import gql from 'graphql-tag'

export default {
  layout: 'app',
  middleware: 'auth'
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
