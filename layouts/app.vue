<template>
  <section class="main-app-layout h-screen text-gray-800 font-sans">
    <QuickLink :authUser="authUser" />
    <Navbar :authUser="authUser" />
    <main style="grid-area: main" class="flex">
      <Sidebar />
      <div class="flex-grow relative">
        <ui-new-dm-model v-if="isDMmodelOpen" class="" style="top: 1rem; left: 1rem" />
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
import Navbar from '~/components/Navbar.vue'
import NewDmModel from '~/components/ui/NewDmModel.vue'

export default {
  name: 'applayout',
  computed: {
    ...mapGetters({ isDMmodelOpen: 'app/getIsDMmodelOpen', authUser: 'user/getauthUser' })
  },
  created() {
    console.log('app created')
    this.mixGetAuthUserOnFirstLoad()
  },
  components: {
    Sidebar,
    QuickLink,
    Navbar,
    uiNewDmModel: NewDmModel
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
    'quicklink nav'
    'quicklink main';
}
</style>
