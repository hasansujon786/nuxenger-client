<template>
  <div class="multi-select">
    <section class="multi-select__input-wrapper border-2 rounded-lg overflow-hidden relative">
      <label
        style="min-width: 40px"
        @click="$refs.msInput.focus()"
        class="absolute right-0 text-gray-500 z-10 input--h-full flex justify-center items-center"
      >
        <span
          :class="{ rotated: selectedItems.length && inFocus }"
          class="multi-select__icon cursor-pointer"
        >
          <ui-icon icon="chevron-d" />
        </span>
      </label>
      <div
        v-show="selectedItems.length"
        class="input--h-full absolute w-full flex border-b border-white"
        :class="{ 'border-gray-300': selectedItems.length && inFocus }"
      >
        <ul class="overflow-x-scroll h-full hide-scroll-bars bg-white flex items-center">
          <pill-with-cross
            :key="i"
            :name="item[trackBy] || item"
            v-for="(item, i) in selectedItems"
            @click.prevent="removeSelectedItem(i)"
          ></pill-with-cross>
        </ul>
        <label
          style="min-width: 40px"
          @click="$refs.msInput.focus()"
          class="px-1 flex-grow bg-white cursor-text"
        ></label>
      </div>

      <div>
        <div
          :class="{ expanded: selectedItems.length && inFocus }"
          class="multi-select__hidden-element w-full"
        ></div>
        <input
          v-bind="$attrs"
          id="ms-input"
          type="text"
          autocomplete="off"
          ref="msInput"
          class="input--h-full w-full px-3 outline-none"
          @focus="handleFocus"
          @blur="handleBlur"
          @keypress.enter.prevent.stop.self="handleClickEnter(filteredItem[selectedIndex])"
          @keydown.up.exact.prevent="decreaseSelectedIndex"
          @keydown.down.exact.prevent="increaseSelectedIndex"
          @keydown.tab.exact="handleTab"
          @keydown.tab.shift.exact="handleTab"
          v-model="inputText"
        />
      </div>
    </section>

    <section class="relative">
      <transition name="plateAnimation">
        <plate v-on-clickaway="away" v-if="isPlateOpen">
          <p
            v-if="filteredItem.length === 0"
            class="font-bold text-sm text-gray-500 text-center my-3"
          >
            No results found
          </p>
          <plate-item
            tabindex="-1"
            :class="{ 'hovered-plate-item': selectedIndex === i && inFocus }"
            @click="handleClickEnter(item)"
            v-for="(item, i) in filteredItem"
            :key="i"
            >{{ item[trackBy] || item }}</plate-item
          >
        </plate>
      </transition>
    </section>
  </div>
</template>

<script>
import Icon from '~/components/ui/Icon.vue'
import Plate from '~/components/ui/Plate.vue'
import Input from '~/components/ui/Input.vue'
import PlateItem from '~/components/ui/PlateItem.vue'
import PillWithCross from '~/components/ui/PillWithCross.vue'
import { mixin as clickaway } from 'vue-clickaway'

export default {
  name: 'MultiSelect',
  mixins: [clickaway],
  data() {
    return {
      selectedIndex: 0,
      selectedItems: [],

      inputText: '',
      inFocus: false,
      isPlateOpen: false
    }
  },
  props: {
    options: {
      type: Array,
      required: true
    },
    trackBy: {
      type: String,
      default: 'name'
    }
  },
  computed: {
    filteredItem() {
      return this.options.filter(option => {
        let opt = typeof option === 'object' ? option[this.trackBy] : option

        return opt.toLowerCase().match(this.inputText.toLowerCase())
      })
    }
  },
  methods: {
    plateIsNotOpen() {
      return !this.isPlateOpen
    },
    increaseSelectedIndex() {
      if (this.plateIsNotOpen()) return (this.isPlateOpen = true)

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
        this.$emit('input', this.selectedItems)
        this.isPlateOpen = false
        this.inputText = ''
        setTimeout(() => {
          this.scrollPillIntoView()
        }, 100)
      }
    },
    handleTab() {
      if (this.plateIsNotOpen()) return

      this.inFocus = false
      this.inputText = ''
      this.closePanel()
    },
    handleFocus() {
      this.inFocus = true
      // this.isPlateOpen = true
    },
    handleBlur() {
      this.inFocus = false
    },
    closePanel() {
      this.isPlateOpen = false
      this.selectedIndex = 0
    },
    removeSelectedItem(index) {
      this.selectedItems = this.selectedItems.filter((item, i) => i !== index)
      this.$emit('input', this.selectedItems)
    },
    scrollPillIntoView() {
      const pills = document.querySelectorAll('.multi-select .pillItems')
      const lastPill = pills[pills.length - 1]
      lastPill.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'end' })
    },
    away() {
      this.inputText = ''
      this.closePanel()
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
    uiIcon: Icon,
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
    transition: height 280ms ease;
  }

  &__icon {
    transform: scale(0.8);
    transition: transform 280ms ease;
    &.rotated {
      transform: scale(0.8) rotate(-180deg);
    }
  }
}

.plateAnimation {
  &-enter-active,
  &-leave-active {
    transition: opacity 150ms ease-in-out, transform 150ms ease-in-out;
  }

  &-enter,
  &-leave-to {
    transform: translateY(8px);
    opacity: 0;
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
