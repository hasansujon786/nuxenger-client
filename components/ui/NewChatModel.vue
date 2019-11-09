<template>
  <div class="absolute">
    <button
      tabindex="-1"
      @click="toggleChatModel"
      class="fixed inset-0 w-full h-full cursor-default bg-gray-900 opacity-50"
    ></button>

    <div class="relative z-10 shadow-md inline-block rounded-lg bg-white border">
      <div
        class="px-3 py-1 rounded-t-lg capitalize border-b font-semibold text-gray-600 bg-gray-100 text text-xs"
      >
        Create new message
      </div>
      <section class="px-6 py-4">
        <form @submit.prevent="handleNewDmSubmitForm" class="relative" style="width: 400px">
          <ui-input v-model="newDM.title" ref="nameInput" placeholder="Chat Name" height="h-12" />
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
                  class="block px-3 py-2 text-sm text-gray-700 font-semibold outline-none focus:bg-gray-300 hover:bg-gray-300"
                  href="#"
                  @click.prevent="handleClickOnUserPanel(user)"
                  v-for="user in filteredUsers"
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
        </form>
      </section>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { USERS_QUERY } from '~/gql'
import { usersMixins, chatMixins } from '~/mixins'
import Input from '~/components/ui/Input.vue'
import Button from '~/components/ui/Button.vue'

export default {
  data() {
    return {
      showUserPanel: false,
      userSearchText: '',
      users: [],
      newDM: {
        title: '',
        userIds: []
      }
    }
  },
  computed: {
    filteredUsers() {
      return this.users.filter(user => {
        return user.name.toLowerCase().includes(this.userSearchText.toLowerCase())
      })
    }
  },
  methods: {
    ...mapActions({ toggleChatModel: 'app/toggleChatModel' }),
    handleClickOnEsc() {
      const handleEsc = e => {
        if (e.key === 'Esc' || e.key === 'Escape') {
          this.toggleChatModel()
        }
      }

      document.addEventListener('keydown', handleEsc)
      this.$once('hook:beforeDestroy', () => {
        document.removeEventListener('keydown', handleEsc)
      })
    },
    indexUserList(direction) {
      // work on To: user field
      console.log(direction)
    },
    handleClickOnUserPanel(selectedUser) {
      this.showUserPanel = false
      this.userSearchText = selectedUser.name
      this.newDM.userIds.push(selectedUser.id)
    },
    async onFirstLoad() {
      // focus on the name input fiesl
      this.$refs.nameInput.$el.focus()
      this.handleClickOnEsc()
      // Get all users
      this.users = await this.mixGetUsers()
    },
    handleNewDmSubmitForm() {
      // TODO: validatae inputs
      this.mixStartGroupChat(this.newDM)
      this.toggleChatModel()
    }
  },
  mounted() {
    this.onFirstLoad()
  },
  components: {
    uiInput: Input,
    uiButton: Button
  },
  mixins: [usersMixins, chatMixins]
}
</script>

<style></style>
