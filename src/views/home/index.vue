<template>
  <div class="home">
    <ListPlants />
  </div>
</template>

<script>
import ListPlants from '@/views/home/components/ListPlants'

export default {
  name: 'HomeView',
  components: {
    ListPlants
  }
}
</script>
