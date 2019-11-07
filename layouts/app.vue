<template>
  <section class="main-app-layout h-screen text-gray-800 font-sans">
    <QuickLink />
    <Navbar />
    <main style="grid-area: main" class="flex">
      <Sidebar />
      <div class="flex-grow relative">
        <ui-new-chat-model class="" style="top: 1rem; left: 1rem" />
        <nuxt />
      </div>
    </main>
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Sidebar from '~/components/Sidebar.vue'
import QuickLink from '~/components/QuickLink.vue'
import Navbar from '~/components/Navbar.vue'
import NewChatModel from '~/components/ui/NewChatModel.vue'

export default {
  name: 'applayout',
  computed: {},
  methods: {},
  components: {
    Sidebar,
    QuickLink,
    Navbar,
    uiNewChatModel: NewChatModel
  }
}
</script>

<style scoped>
.main-app-layout {
  display: grid;
  grid-template-rows: 64px auto;
  grid-template-columns: 64px auto;
  grid-template-areas:
    'quicklink nav'
    'quicklink main';
}
</style>
