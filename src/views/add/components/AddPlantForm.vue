<template>
  <ValidationObserver v-slot="{ invalid }">
    <form class="mt-8" @submit.prevent="onSubmit">
      <ValidationProvider
        name="autocomplete"
        rules="required"
        v-slot="{ errors }"
      >
        <label class="font-bold" for="autocomplete">*Busca una planta</label>
        <Autocomplete
          v-model="autocompleteValue"
          :items="plants"
          placeholder="Nombre de la planta"
          @is-typing="onChangeAutocomplete"
          @select-item="onSelectItem"
          @clear-item="clearItems"
        />
        <span>{{ errors[0] }}</span>
      </ValidationProvider>
      <div class="flex justify-center mt-8">
        <TheButton size="large" :is-disabled="invalid">
          Guardar
        </TheButton>
      </div>
    </form>
  </ValidationObserver>
</template>

<script>
import Autocomplete from '@/components/ui/Autocomplete'
import TheButton from '@/components/ui/TheButton'
import { ValidationProvider, ValidationObserver } from 'vee-validate'

export default {
  name: 'AddPlantForm',
  components: {
    Autocomplete,
    TheButton,
    ValidationProvider,
    ValidationObserver
  },
  props: {
    plants: {
      type: Array,
      default: () => []
    }
  },
  data: () => ({
    currentPlant: null,
    autocompleteValue: null
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
      this.autocompleteValue = item.name
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
