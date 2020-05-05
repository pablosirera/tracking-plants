<template>
  <div class="autocomplete-wrapper">
    <div>
      <input
        v-model="itemSelected"
        type="text"
        class="border py-1 px-1 rounded w-full capitalize focus:outline-none"
        @input="changeValueAutocomplete"
      />
    </div>
    <div class="border py-1 px-1" v-if="items.length">
      <span
        v-for="item in items"
        :key="item.id"
        class="block cursor-pointer capitalize hover:font-bold"
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
    }
  },
  data: () => ({
    itemSelected: ''
  }),
  methods: {
    changeValueAutocomplete(event) {
      const value = event.target.value
      this.$emit('input', value)
    },
    selectItem(item) {
      this.itemSelected = item.name
      this.$emit('select-item', item)
    }
  }
}
</script>
