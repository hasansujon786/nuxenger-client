<template>
  <div class="multi-select">
    <section class="multi-select__input-wrapper border-2 rounded-lg overflow-hidden relative">
      <div
        v-show="selectedItems.length"
        class="input--h-full absolute w-full flex border-b border-white"
        :class="{ 'border-gray-300': selectedItems.length > 0 && isfocus }"
      >
        <ul class="overflow-x-scroll h-full hide-scroll-bars bg-white flex items-center">
          <pill-with-cross
            :handleCloss="removeSelectedItem"
            :value="item"
            v-for="(item, i) in selectedItems"
            :key="i"
          ></pill-with-cross>
        </ul>
        <label class="px-1 flex-grow bg-white cursor-text" for="ms-input"></label>
      </div>

      <div>
        <div
          :class="{ expanded: selectedItems.length > 0 && isfocus }"
          class="multi-select__hidden-element w-full"
        ></div>
        <input
          id="ms-input"
          ref="msInput"
          type="text"
          autocomplete="off"
          class="input--h-full w-full px-3 outline-none"
          @focus="handleFocus"
          @blur="handleBlur"
          @keyup.enter.exact.prevent="handleClickEnter(filteredItem[selectedIndex])"
          @keydown.up.exact.prevent="decreaseSelectedIndex"
          @keydown.down.exact.prevent="increaseSelectedIndex"
          @keydown.tab.exact="handleTab"
          @keydown.tab.shift.exact="handleTab"
          v-model="inputText"
          placeholder="Type the name of a person."
        />
      </div>
    </section>

    <section class="relative">
      <plate v-show="isPlateOpen">
        <p
          v-if="filteredItem.length === 0"
          class="font-bold text-sm text-gray-500 text-center my-3"
        >
          No results found
        </p>
        <plate-item
          tabindex="-1"
          :class="{ 'hovered-plate-item': selectedIndex === i }"
          @click="handleClickEnter(item)"
          v-for="(item, i) in filteredItem"
          :key="i"
          >{{ item.name }}</plate-item
        >
      </plate>
    </section>
  </div>
</template>

<script>
import Plate from '~/components/ui/Plate.vue'
import PlateItem from '~/components/ui/PlateItem.vue'
import Input from '~/components/ui/Input.vue'
import PillWithCross from '~/components/ui/PillWithCross.vue'

export default {
  name: 'MultiSelect',
  data() {
    return {
      selectedIndex: 0,
      selectedItems: [],

      inputText: '',
      isfocus: false,
      isPlateOpen: false
    }
  },
  props: {
    options: {
      type: Array
    },
    trackBy: {
      type: String,
      default: 'name'
    }
  },
  computed: {
    filteredItem() {
      return this.options.filter(option =>
        option[this.trackBy].toLowerCase().match(this.inputText.toLowerCase())
      )
    }
  },
  methods: {
    plateIsNotOpen() {
      return !this.isPlateOpen
    },
    increaseSelectedIndex() {
      if (this.plateIsNotOpen()) {
        return (this.isPlateOpen = true)
      }

      this.selectedIndex = this.selectedIndex += 1
      this.selectedIndex >= this.filteredItem.length ? (this.selectedIndex = 0) : null
    },
    decreaseSelectedIndex() {
      if (this.plateIsNotOpen()) return

      this.selectedIndex = this.selectedIndex -= 1
      this.selectedIndex < 0 ? (this.selectedIndex = this.filteredItem.length - 1) : null
    },
    handleClickEnter(selectedItem) {
      if (this.plateIsNotOpen()) return

      if (selectedItem) {
        this.selectedItems.push(selectedItem)
        // this.isPlateOpen = false
        this.inputText = ''
        setTimeout(() => {
          this.scrollPillIntoView()
        }, 100)
      }
    },
    handleTab() {
      if (this.plateIsNotOpen()) return

      this.isfocus = false
      this.closePanel()
    },
    handleFocus() {
      this.isfocus = true
      // this.isPlateOpen = true
    },
    handleBlur() {
      this.isfocus = false
    },
    closePanel() {
      this.isPlateOpen = false
      this.selectedIndex = 0
    },
    removeSelectedItem(removedItem) {
      this.selectedItems = this.selectedItems.filter(item => item.id !== removedItem.id)
      console.log(removedItem.name)
    },
    scrollPillIntoView() {
      const pills = document.querySelectorAll('.multi-select .pillItems')
      const lastPill = pills[pills.length - 1]
      lastPill.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'end' })
    }
  },
  watch: {
    inputText(newVal) {
      if (newVal.length > 0) {
        this.selectedIndex = 0
        this.isPlateOpen = true
      } else {
        this.closePanel()
      }
    }
  },
  components: {
    uiInput: Input,
    PillWithCross,
    PlateItem,
    Plate
  }
}
</script>

<style lang="scss" scoped>
.multi-select {
  --input-height: 48px;

  &__input-wrapper:focus-within {
    @apply border-gray-500;
  }

  &__hidden-element {
    height: 0;
    transition: all 280ms ease;
  }
}

.multi-select__hidden-element.expanded,
.input--h-full {
  height: calc(var(--input-height) - 4px);
}

.hovered-plate-item {
  @apply bg-gray-200;
}
</style>
