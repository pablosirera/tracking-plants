<template>
  <div class="relative">
    <input
      data-test="autocomplete-input"
      v-model="itemSelected"
      v-click-outside="onClickOutsideInput"
      :placeholder="placeholder"
      type="text"
      class="name-autocomplete border py-1 px-1 rounded w-full capitalize focus:outline-none"
      @input="changeValueAutocomplete"
    />
    <div
      data-test="wrapper-items-autocomplete"
      class="border max-h-32 overflow-y-scroll absolute w-full bg-white z-10"
      v-if="items.length"
    >
      <span
        v-for="item in items"
        :key="item.id"
        data-test="autocomplete-item"
        class="block cursor-pointer capitalize py-1 px-1 hover:font-bold hover:bg-gray-200"
        @click="selectItem(item)"
      >
        {{ item.name }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Autocomplete',
  props: {
    items: {
      type: Array,
      default: () => []
    },
    placeholder: {
      type: String
    }
  },
  data: () => ({
    itemSelected: ''
  }),
  methods: {
    changeValueAutocomplete(event) {
      const value = event.target.value
      this.$emit('is-typing', value)
    },
    selectItem(item) {
      this.itemSelected = item.name
      this.$emit('select-item', item)
    },
    onClickOutsideInput() {
      this.$emit('clear-item')
    }
  }
}
</script>

<style lang="scss" scoped>
.name-autocomplete {
  &::placeholder {
    text-transform: initial;
  }
}
</style>
