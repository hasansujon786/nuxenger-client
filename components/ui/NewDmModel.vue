<template>
  <div class="absolute">
    <button
      tabindex="-1"
      @click="toggleDMmodel"
      class="fixed inset-0 w-full h-full cursor-default bg-gray-900 opacity-50"
    ></button>

    <div class="relative z-10 shadow-md inline-block rounded-lg bg-white border">
      <div
        class="px-3 py-1 rounded-t-lg capitalize border-b font-semibold text-gray-600 bg-gray-100 text text-xs"
      >
        Create new message
      </div>
      <section class="px-6 py-4">
        <div class="relative" style="width: 400px">
          <ui-input ref="nameInput" placeholder="Name" height="h-12" />
          <!-- @blur="showUserPanel = false" -->
          <ui-input
            v-model="userSearchText"
            @focus="showUserPanel = true"
            @keydown.prevent.down="indexUserList('down')"
            @keydown.prevent.up="indexUserList('up')"
            placeholder="To: "
            height="h-12"
            class="mt-2"
          />

          <section v-if="showUserPanel" class="absolute -mt-2 left-0 w-full px-2">
            <div class="bg-white border rounded-lg shadow-md overflow-hidden">
              <section v-if="users && users.length" class="">
                <a
                  class="block px-3 py-2 text-sm outline-none focus:bg-gray-300 hover:bg-gray-300"
                  href="#"
                  v-for="user in users"
                  :key="user.id"
                >
                  {{ user.name }}
                </a>
              </section>

              <p v-else class="font-bold text-sm text-gray-500 text-center my-3">
                No results found
              </p>
            </div>
          </section>

          <ui-button :primary="true" :disabled="false" class="w-full mt-2">Create</ui-button>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Input from '~/components/ui/Input.vue'
import Button from '~/components/ui/Button.vue'

export default {
  data() {
    return {
      showUserPanel: false,
      userSearchText: '',
      users: [
        { name: 'kuddus ali kan', id: 1 },
        { name: 'Shahrukh Kahan', id: 2 },
        { name: 'Katrina kaif', id: 3 },
        { name: 'Motaleb udduin', id: 4 },
        { name: 'Moriom Begurm', id: 5 },
        { name: 'Sokina Banu', id: 6 }
      ]
    }
  },
  methods: {
    ...mapActions({ toggleDMmodel: 'app/toggleDMmodel' }),
    indexUserList(direction) {
      console.log(direction)
    }
  },
  mounted() {
    this.$refs.nameInput.$el.focus()
    const handleEsc = e => {
      if (e.key === 'Esc' || e.key === 'Escape') {
        this.toggleDMmodel()
      }
    }

    document.addEventListener('keydown', handleEsc)
    this.$once('hook:beforeDestroy', () => document.removeEventListener('keydown', handleEsc))
  },
  components: {
    uiInput: Input,
    uiButton: Button
  }
}
</script>

<style></style>
