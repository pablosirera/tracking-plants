<template>
  <div>
    <h1 class="title font-bold text-xl mb-4">
      Mis plantas
    </h1>

    <ul>
      <li>
        <button
          class="border border-black rounded-full py-1 px-3 text-3xl"
          @click="goToCreatePlant"
        >
          +
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import { ROUTES } from '@/constants'

export default {
  name: 'ListPlans',
  methods: {
    goToCreatePlant() {
      this.$router.push({ name: ROUTES.ADD.name })
    }
  }
}
</script>
