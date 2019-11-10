<template>
  <section class="main-app-layout h-screen text-gray-800 font-sans">
    <QuickLink :authUser="authUser" />
    <main style="grid-area: main" class="flex">
      <Sidebar />
      <div class="flex-grow relative">
        <ui-new-chat-model v-if="isChatModelOpen" class="" style="top: 5rem; left: 1rem" />
        <nuxt />
      </div>
    </main>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import { authMixins } from '~/mixins'
import Sidebar from '~/components/Sidebar.vue'
import QuickLink from '~/components/QuickLink.vue'
import NewChatModel from '~/components/ui/NewChatModel.vue'

export default {
  name: 'applayout',
  computed: {
    ...mapGetters({ isChatModelOpen: 'app/isChatModelOpen', authUser: 'user/getauthUser' })
  },
  created() {
    this.mixGetAuthUserOnFirstLoad()
  },
  components: {
    Sidebar,
    QuickLink,
    uiNewChatModel: NewChatModel
  },
  mixins: [authMixins]
}
</script>

<style scoped>
.main-app-layout {
  display: grid;
  grid-template-rows: 64px auto;
  grid-template-columns: 64px auto;
  grid-template-areas:
    'quicklink main'
    'quicklink main';
}
</style>
