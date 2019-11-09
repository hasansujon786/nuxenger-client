<template>
  <div class="h-full">
    <section
      style="grid-area: chat-head"
      class="px-3 flex h-16 justify-between items-center bg-gray-100 border-b"
    >
      <span>
        <h2 class="font-semibold"></h2>
        <p class="text-xs text-gray-600 tracking-wider"></p>
      </span>
    </section>
    index page
    <div>
      {{ hello }}
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag'

export default {
  layout: 'app',
  apollo: {
    hello: gql`
      query hello {
        hello
      }
    `
  }
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
