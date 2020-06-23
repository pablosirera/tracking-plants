import { myPlantsCollection } from '@/configFirebase'

export default {
  savePlant(_, payload) {
    return myPlantsCollection.doc(payload.id.toString()).set({
      name: payload.name,
      id: payload.id,
      link: payload.link,
      dueDate: payload.dueDate,
      duration: payload.duration
    })
  },
  async listPlants({ commit }) {
    const response = await myPlantsCollection.get()
    const parsedData = response.docs.map(item => {
      return item.data()
    })
    commit('setPlants', parsedData)
    return parsedData
  },
  async listRecentPlants() {
    const response = await myPlantsCollection
      .where('dueDate', '<=', new Date().toISOString())
      .orderBy('dueDate', 'desc')
      .limit(2)
      .get()
    return response.docs.map(item => {
      return item.data()
    })
  },
  async getPlant(_, plantId) {
    const response = await myPlantsCollection.doc(plantId.toString()).get()
    return response.data()
  },
  updatePlant({ dispatch }, plantData) {
    const { id, data } = plantData
    myPlantsCollection.doc(id.toString()).update({
      waterPlant: [...data]
    })
    dispatch('listPlants')
  }
}
