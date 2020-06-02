<template>
  <div class="home">
    <ListPlants :plants="plants" />
  </div>
</template>

<script>
import ListPlants from '@/views/home/components/ListPlants'
import { mapActions } from 'vuex'

export default {
  name: 'HomeView',
  components: {
    ListPlants
  },
  data: () => ({
    plants: []
  }),
  mounted() {
    this.loadData()
  },
  methods: {
    ...mapActions({
      listPlants: 'plants/listPlants'
    }),
    async loadData() {
      this.plants = await this.listPlants()
    }
  }
}
</script>
