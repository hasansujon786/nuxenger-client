<template>
  <nav class="bg-gray-100 border-b flex " style="grid-area: nav">
    <section class="border-r flex items-center px-3" style="width: 300px">
      <h1
        style="font-size: 38px"
        class="leading-none text-gray-800 font-bold leading-none -mt-2 mr-auto"
      >
        nuxenger
      </h1>

      <ui-icon icon="bell" />
      <ui-dropdown
        @item-click="test"
        :list="dropList"
        :isOpen="showDrop"
        @close="showDrop = false"
        @toggle="toggleDrop"
      >
        <ui-avater :title="authUser.name" classname="ml-1"
      /></ui-dropdown>
    </section>

    <section class="flex-grow px-3 flex justify-between items-center">
      <span>
        <h2 class="font-semibold">Kuddus khan</h2>
        <p class="text-xs text-gray-600 tracking-wider">Active</p>
      </span>
      <ui-icon />
    </section>
  </nav>
</template>

<script>
import Avater from '~/components/ui/Avater.vue'
import Icon from '~/components/ui/Icon.vue'
import DropdownVue from '~/components/ui/Dropdown.vue'

export default {
  data() {
    return {
      showDrop: false,
      dropList: ['All Contacts', 'Settings', 'Signout']
    }
  },
  props: {
    authUser: {
      type: Object
    }
  },
  methods: {
    toggleDrop() {
      this.showDrop = !this.showDrop
    },
    test(item) {
      console.log(item)
    }
  },
  components: {
    uiIcon: Icon,
    uiAvater: Avater,
    uiDropdown: DropdownVue
  }
}
</script>
