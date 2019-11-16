<template>
  <section>
    {{ selectedIndex }}
    <ui-input
      @blur="closePanel"
      @keyup.enter.exact.prevent="handleClickEnter"
      @keydown.tab.shift.exact="handleShiftTab"
      @keydown.up.exact.prevent="decreaseSelectedIndex"
      @keydown.down.exact.prevent="increaseSelectedIndex"
      @keydown.tab.exact="handleTab"
      v-model="inputText"
      placeholder="Search here..."
    ></ui-input>
    <div class="relative">
      <plate v-show="isPlateOpen">
        <p
          v-if="filteredItem.length === 0"
          class="font-bold text-sm text-gray-500 text-center my-3"
        >
          No results found
        </p>
        <plate-item
          tabindex="-1"
          :class="{ selected: selectedIndex === i }"
          v-for="(item, i) in filteredItem"
          :key="i"
          >{{ item.name }}</plate-item
        >
      </plate>
    </div>
  </section>
</template>

<script>
import Plate from '~/components/ui/Plate.vue'
import PlateItem from '~/components/ui/PlateItem.vue'
import Input from '~/components/ui/Input.vue'

export default {
  data() {
    return {
      selectedIndex: 0,
      isPlateOpen: false,
      inputText: ''
    }
  },
  props: {
    options: {
      type: Array
    }
  },
  computed: {
    filteredItem() {
      return this.options.filter(option =>
        option.name.toLowerCase().match(this.inputText.toLowerCase())
      )
    }
  },
  methods: {
    plateIsNotOpen() {
      return !this.isPlateOpen
    },
    increaseSelectedIndex() {
      if (!this.isPlateOpen) {
        return (this.isPlateOpen = true)
      }

      this.selectedIndex = this.selectedIndex += 1
      if (this.selectedIndex >= this.filteredItem.length) {
        this.selectedIndex = 0
      }
    },
    decreaseSelectedIndex() {
      if (this.plateIsNotOpen()) return

      this.selectedIndex = this.selectedIndex -= 1
      if (this.selectedIndex < 0) {
        this.selectedIndex = this.filteredItem.length - 1
      }
    },
    handleClickEnter() {
      if (this.plateIsNotOpen()) return

      this.isPlateOpen = false
      return this.filteredItem[this.selectedIndex]
    },
    handleShiftTab($event) {
      if (this.plateIsNotOpen()) return

      $event.preventDefault()
      this.decreaseSelectedIndex()
    },
    handleTab($event) {
      if (this.plateIsNotOpen()) return

      $event.preventDefault()
      this.increaseSelectedIndex()
    },
    closePanel() {
      this.isPlateOpen = false
      this.selectedIndex = 0
    }
  },
  watch: {
    inputText(newVal) {
      newVal.length > 0 ? (this.isPlateOpen = true) : this.closePanel()
    }
  },
  components: {
    uiInput: Input,
    PlateItem,
    Plate
  }
}
</script>

<style lang="scss" scoped>
.selected {
  @apply bg-gray-200;
}
</style>
