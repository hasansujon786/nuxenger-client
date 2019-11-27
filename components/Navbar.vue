<template>
  <nav class="navbar bg-app-light border-b flex " style="grid-area: navbar">
    <section class="flex items-center px-3 w-full">
      <h1
        style="font-size: 38px"
        class="leading-none text-gray-800 font-bold leading-none -mt-2 mr-auto"
      >
        nuxenger
      </h1>

      <div class="px-2 border-gray-400 ">
        <icon icon="bell" />
      </div>

      <dropdown direction="right-0" width="150">
        <template #icon>
          <div class="flex">
            <avater :name="authUser.name" />

            <span class="ml-1">
              <h2 class="font-semibold capitalize text-sm text-gray-800">
                {{ authUser.name }}
                <svg
                  class="inline text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="183.33 185.58 16 12"
                  width="20"
                  height="14"
                >
                  <defs><path d="M187.33 190.58l-3-4h12l-3 4-3 4-3-4z" id="a" /></defs>
                  <use xlink:href="#a" fill="currentColor" />
                </svg>
              </h2>

              <p class="text-xs text-gray-600 leading-none tracking-wider">Active</p>
            </span>
          </div>
        </template>
        <template #default="func">
          <dropdown-item :func="func">Contacts</dropdown-item>
          <dropdown-item :func="func">Turn of active status</dropdown-item>
          <dropdown-item :func="func">Settings</dropdown-item>
          <dropdown-item @onClick="mixSignOutAuthUser" :func="func">Signout</dropdown-item>
        </template>
      </dropdown>
    </section>
  </nav>
</template>

<script>
import { authMixins } from '~/mixins'
import Icon from '~/components/ui/Icon.vue'
import Avater from '~/components/ui/Avater.vue'
import Dropdown from '~/components/ui/Dropdown.vue'
import DropdownItem from '~/components/ui/DropdownItem.vue'

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
    Icon,
    Avater,
    Dropdown,
    DropdownItem
  },
  mixins: [authMixins]
}
</script>
