<template>
  <section class="main-app-layout h-screen text-gray-900 font-sans">
    <QuickLink />
    <Navbar />
    <main style="grid-area: main" class="flex">
      <Sidebar />
      <div class="flex-grow">
        <nuxt />
      </div>
    </main>
  </section>
</template>

<script>
import Sidebar from '~/components/Sidebar.vue'
import QuickLink from '~/components/QuickLink.vue'
import Navbar from '~/components/Navbar.vue'

export default {
  components: {
    Sidebar,
    QuickLink,
    Navbar
  }
}
</script>

<style>
.main-app-layout {
  display: grid;
  grid-template-rows: 64px auto;
  grid-template-columns: 64px auto;
  grid-template-areas:
    'quicklink nav'
    'quicklink main';
}
</style>
