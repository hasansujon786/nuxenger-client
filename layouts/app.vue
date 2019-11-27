<template>
  <section class="main-app-layout relative text-gray-800 font-sans">
    <QuickLink :authUser="authUser" class="sticky top-0 h-screen" />
    <Navbar class="sticky top-0" />
    <main style="grid-area: main; background: #EAEAEA" class="flex">
      <RecentItemList v-if="sidebarLeft === 'recent'" />
      <div class="flex-grow relative">
        <new-chat-model v-if="isChatModelOpen" class="" style="top: 5rem; left: 1rem" />
        <nuxt />
      </div>
      <ActiveItemList v-if="sidebarRight === 'active'" />
    </main>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import { authMixins } from '~/mixins'
import ActiveItemList from '~/components/sidebar/ActiveItemList.vue'
import QuickLink from '~/components/QuickLink.vue'
import NewChatModel from '~/components/ui/NewChatModel.vue'
import Navbar from '~/components/Navbar.vue'
import SidebarWrapper from '~/components/SidebarWrapper.vue'
import RecentItemList from '~/components/sidebar/RecentItemList.vue'

export default {
  name: 'applayout',
  computed: {
    ...mapGetters({
      isChatModelOpen: 'app/isChatModelOpen',
      authUser: 'user/getauthUser',
      sidebarRight: 'app/sidebarRight',
      sidebarLeft: 'app/sidebarLeft'
    })
  },
  created() {
    this.mixGetAuthUserOnFirstLoad()
  },
  components: {
    Navbar,
    QuickLink,
    NewChatModel,
    ActiveItemList,
    SidebarWrapper,
    RecentItemList
  },
  mixins: [authMixins]
}
</script>

<style scoped>
.main-app-layout {
  display: grid;
  grid-template-rows: 52px auto;
  grid-template-columns: 64px auto;

  grid-template-areas:
    'quicklink navbar'
    'quicklink main';
}

.navbar,
.quick-link {
  z-index: 100;
}
</style>
