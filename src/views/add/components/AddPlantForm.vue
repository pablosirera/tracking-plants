<template>
  <form class="mt-8" @submit.prevent="onSubmit">
    <Autocomplete
      :items="plants"
      @input="onChangeAutocomplete"
      @select-item="onSelectItem"
      @clear-item="clearItems"
    />
    <div class="flex justify-center mt-8">
      <TheButton size="large">Guardar</TheButton>
    </div>
  </form>
</template>

<script>
import Autocomplete from '@/components/ui/Autocomplete'
import TheButton from '@/components/ui/TheButton'

export default {
  name: 'AddPlantForm',
  components: {
    Autocomplete,
    TheButton
  },
  props: {
    plants: {
      type: Array,
      default: () => []
    }
  },
  data: () => ({
    currentPlant: null
  }),
  methods: {
    async onChangeAutocomplete(value) {
      if (value.length >= 3) {
        this.$emit('find-plant', value)
        return
      }

      this.clearItems()
    },
    onSelectItem(item) {
      this.currentPlant = item
      this.clearItems()
    },
    clearItems() {
      this.$emit('clear-items')
    },
    onSubmit() {
      this.$emit('submit-form', this.currentPlant)
    }
  }
}
</script>
