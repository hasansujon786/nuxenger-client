<template>
  <nav class="navbar bg-app-light border-b flex " style="grid-area: navbar">
    <section class="flex items-center px-3 w-full">
      <h1
        style="font-size: 38px"
        class="leading-none text-gray-800 font-bold leading-none -mt-2 mr-auto"
      >
        nuxenger
      </h1>

      <ui-icon icon="bell" />
      <ui-dropdown
        @item-click="handleUserDropdownClick"
        :list="dropList"
        :isOpen="showDrop"
        @close="showDrop = false"
        @toggle="toggleDrop"
      >
        <ui-avater :title="authUser.name" classname="ml-1"
      /></ui-dropdown>
    </section>
  </nav>
</template>

<script>
import Avater from '~/components/ui/Avater.vue'
import Icon from '~/components/ui/Icon.vue'
import DropdownVue from '~/components/ui/AccountDropdown.vue'
import { authMixins } from '~/mixins'

export default {
  data() {
    return {
      showDrop: false,
      dropList: ['All Contacts', 'Settings', 'Signout']
    }
  },
  computed: {
    authUser() {
      return this.$store.getters['user/getauthUser']
    }
  },
  methods: {
    toggleDrop() {
      this.showDrop = !this.showDrop
    },
    handleUserDropdownClick(item) {
      switch (item.toLowerCase()) {
        case 'all contacts':
          console.log('all contacts')
          break

        case 'settings':
          console.log('settings')
          break

        case 'signout':
          this.mixSignOutAuthUser()
          break

        default:
          break
      }
    }
  },
  components: {
    uiIcon: Icon,
    uiAvater: Avater,
    uiDropdown: DropdownVue
  },
  mixins: [authMixins]
}
</script>
