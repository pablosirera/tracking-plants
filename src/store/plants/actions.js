import { myPlantsCollection } from '@/configFirebase'

export default {
  async savePlant(_, payload) {
    const response = await myPlantsCollection.doc(payload.id.toString()).set({
      name: payload.name,
      id: payload.id,
      link: payload.link
    })
    console.log(response)
  },
  async listPlants() {
    const response = await myPlantsCollection.get()
    return response.docs.map(item => {
      return item.data()
    })
  }
}
