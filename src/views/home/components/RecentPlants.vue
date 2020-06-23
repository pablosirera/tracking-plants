<template>
  <section class="flex justify-around mb-8">
    <div
      v-for="(plant, index) in plants"
      :key="plant.id"
      :class="`plant-${index}`"
      class="plant"
      @click="goToDetail(plant.id)"
    >
      <div class="image-wrapper">
        <img :src="getImageUrl(images[index])" alt="Imagen de la planta" />
      </div>
      <span class="mt-4 block capitalize font-semibold">{{ plant.name }}</span>
      <span class="duration">{{ plant.duration }}</span>
    </div>
  </section>
</template>

<script>
import { ROUTES } from '@/constants'

export default {
  name: 'RecentPlants',
  props: {
    plants: {
      type: Array,
      default: () => []
    }
  },
  data: () => ({
    images: ['aloevera.png', 'cactus.png']
  }),
  methods: {
    getImageUrl(image) {
      return require('@/assets/images/' + image)
    },
    goToDetail(plantId) {
      this.$router.push({ name: ROUTES.DETAIL.name, params: { id: plantId } })
    }
  }
}
</script>

<style lang="scss" scoped>
.plant {
  .image-wrapper {
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.08);
    width: 160px;
    @apply px-4 py-8 rounded-lg;
  }

  &-0 {
    .image-wrapper {
      @apply bg-orange-main-300;
    }
  }

  &-1 {
    .image-wrapper {
      @apply bg-yellow-main-400 flex justify-center;
    }
  }

  .duration {
    width: fit-content;
    @apply block mt-2 bg-orange-main-100 rounded-md px-4 py-1 text-orange-main-800 font-medium text-sm;
  }
}
</style>
