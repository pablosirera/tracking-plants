export default {
  getCurrentPlant(state) {
    return plantId => {
      return state.plants.find(plant => plant.id === plantId)
    }
  }
}
