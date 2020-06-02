<template>
  <div>
    <h1 class="title font-bold text-xl mb-4">
      Mis plantas
    </h1>

    <ul class="list flex items-center overflow-x-scroll py-4">
      <li class="mr-5">
        <button
          data-test-id="add-button"
          class="add-button border border-red-main-400 text-3xl w-12 h-12"
          @click="goToCreatePlant"
        >
          +
        </button>
      </li>
      <li
        v-for="plant in plants"
        :key="plant.id"
        class="plant-item shadow-lg w-32 h-32 rounded-lg mr-5 flex items-center justify-center flex-col cursor-pointer hover:bg-gray-100"
        @click="emitItemEvent(plant.id)"
      >
        <img
          class="w-12 h-16"
          src="@/assets/images/botanical.svg"
          :alt="plant.name"
        />
        <p class="text-sm">{{ plant.name }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { ROUTES } from '@/constants'

export default {
  name: 'ListPlans',
  props: {
    plants: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    goToCreatePlant() {
      this.$router.push({ name: ROUTES.ADD.name })
    },
    emitItemEvent(plantId) {
      this.$emit('item-clicked', plantId)
    }
  }
}
</script>

<style lang="scss" scoped>
.add-button {
  border-radius: 16px;
}

.list {
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
}

.plant-item {
  min-width: 128px;
  max-width: 128px;
  min-height: 128px;
  max-height: 128px;
}
</style>
